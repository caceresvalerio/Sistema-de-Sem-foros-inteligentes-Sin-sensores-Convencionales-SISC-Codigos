package ado.edu.pucmm.trafficlightcontroller.rest;

import android.os.AsyncTask;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

import java.io.InputStream;
import java.net.SocketTimeoutException;
import java.net.URLConnection;
import java.util.HashMap;

/**
 * Created by wgarcia on 9/20/2016.
 */
public class RestHandler {

    private String baseUrl;
    private ThreadLocal<String> endPoint = new ThreadLocal<>();
    private String httpScheme;
    private ThreadLocal<String> httpMethod = new ThreadLocal<>();
    private ThreadLocal<HashMap<String, String>> parameters = new ThreadLocal<>();

    public RestHandler(String baseUrl, String httpScheme) {
        this.baseUrl = baseUrl;
        this.httpScheme = httpScheme;
    }

    public RestHandler setEndPoint(@NonNull String endPoint) {
        this.endPoint.set(endPoint);
        return this;
    }

    public RestHandler setHttpMethod(@Nullable String httpMethod) {
        if (httpMethod == null) {
            this.httpMethod.set("GET");
            return this;
        }
        this.httpMethod.set(httpMethod);
        return this;
    }

    public RestHandler setParameters(@NonNull HashMap<String, String> parameters) {
        this.parameters.set(parameters);
        return this;
    }

    public <T extends Parser> void call(final Callable<T> callable) {
        final Parser parser = callable.getParserInstance();

        final String threadEndPoint = endPoint.get();
        final String threadMethod = httpMethod.get();

        new AsyncTask<HashMap<String, String>, T, T>() {

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                callable.onPreExecute();
            }

            @Override
            protected T doInBackground(HashMap<String, String>... parameters) {
                InputStream inputStream = null;
                try {
                    StringBuilder urlBuilder = new StringBuilder(httpScheme);
                    urlBuilder.append(baseUrl);
                    urlBuilder.append(threadEndPoint);

                    String url = urlBuilder.toString();
                    if ("GET".equals(threadMethod)) {
                        url = RestServiceHelper.createGetParameters(url, parameters[0]);
                    }

                    URLConnection connection =  RestServiceHelper.createHttpConnection(url, threadMethod,
                            "application/json");

                    if (!"GET".equals(threadMethod)) {
                        RestServiceHelper.createParameters(parameters[0], connection);
                    }

                    inputStream = connection.getInputStream();
                    parser.parse(RestServiceHelper.getResponse(inputStream, connection));

                }catch (SocketTimeoutException ex){

                } catch (Exception e) {
                    e.printStackTrace();

                } finally {
                    RestServiceHelper.close(inputStream);
                }

                return (T) parser;
            }

            @Override
            protected void onPostExecute(T parser) {
                super.onPostExecute(parser);
                callable.onPostExecute(parser);
            }
        }.execute(parameters.get());
    }

    public static final class Builder {

        private String baseUrl;
        private String httpScheme;

        public Builder setBaseUrl(@NonNull String baseUrl) {
            checkNotNull(baseUrl, "baseUrl == null");
            this.baseUrl = baseUrl;

            return this;
        }

        public Builder setScheme(@NonNull String scheme) {
            this.httpScheme = scheme;

            return this;
        }

        public RestHandler build() {
            return new RestHandler(baseUrl, httpScheme);
        }

        private static <T> T checkNotNull(T object, String message) {
            if (object == null) {
                throw new NullPointerException(message);
            }
            return object;
        }
    }

}
