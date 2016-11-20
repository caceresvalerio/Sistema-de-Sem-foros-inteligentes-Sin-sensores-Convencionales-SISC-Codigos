package ado.edu.pucmm.trafficlightcontroller.rest;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.Closeable;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;


/**
 * Created by Wilson on 9/22/16.
 */
public class RestServiceHelper {

    private static final String TAG = RestServiceHelper.class.getSimpleName();
    public static final String API_USERNAME = "api_user@enteractiva.net";
    public static final String API_PASSWORD = "40222155992";
    private static boolean isLastVersion = true;

    public static String createGetParameters(String url, HashMap<String, String> params) throws UnsupportedEncodingException {
        if (params != null && params.size() > 0) {
            url = generateURL(url, params);
            url += "?";
            for (Map.Entry<String, String> entry : params.entrySet()) {
                try {
                    url += URLEncoder.encode(entry.getKey(), "utf-8") + "=" + URLEncoder.encode(entry.getValue(), "utf-8");
                    url += '&';
                } catch (Exception ex) {
                    continue;
                }
            }
        }
        return url;
    }

    private static String generateURL(String template, Map<String, String> model) {
        if (template.contains("${")) {
            for (String key : model.keySet()) {
                String flag = "${" + key + "}";

                if (template.contains(flag)) {
                    template = template.replace(flag, model.get(key));
                    model.remove(key);
                }

            }
        }
        return template;
    }

    public static HttpURLConnection createHttpConnection(String urlString, String methodType, String contentType) throws MalformedURLException, IOException {
        URL url = new URL(urlString);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setReadTimeout(10000 /* milliseconds */);
        conn.setConnectTimeout(10000 /* milliseconds */);
        conn.setRequestMethod(methodType);
        conn.setDoInput(true);

        if (!"GET".equals(methodType)) {
            conn.setDoOutput(true);
        }

        conn.setRequestProperty("Content-type", contentType);
        conn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/json");
        conn.setRequestProperty("Connection", "keep-alive");

        try {
            conn.connect();
        } catch (ConnectException e) {
            e.printStackTrace();

        }
        return conn;
    }

    public static HttpsURLConnection createHttpsConnection(String urlString, String methodType, String contentType) throws MalformedURLException, IOException {
        URL url = new URL(urlString);
        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
        conn.setReadTimeout(10000 /* milliseconds */);
        conn.setConnectTimeout(10000 /* milliseconds */);
        conn.setRequestMethod(methodType);
        conn.setDoInput(true);

        if (!"GET".equals(methodType)) {
            conn.setDoOutput(true);
        }

        conn.setRequestProperty("Content-type", contentType);
        conn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/json");
        conn.setRequestProperty("Connection", "keep-alive");

        try {
            conn.connect();
        } catch (ConnectException e) {
            e.printStackTrace();

        }
        return conn;
    }

    @NonNull
    public static String getResponse(InputStream is, URLConnection conn) throws IOException {
        StringBuilder result = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));

        String line = "";
        while ((line = reader.readLine()) != null) {
            result.append(line);
        }

        if (conn instanceof HttpURLConnection) {
            ((HttpURLConnection) conn).disconnect();
        } else {
            ((HttpsURLConnection) conn).disconnect();
        }

        return result.toString();
    }

    public static void createParameters(Map<String, String> properties, URLConnection conn) throws IOException, JSONException {
        JSONObject jsonParam = new JSONObject();
        JSONObject jsonData = new JSONObject();

        if (properties != null && properties.size() > 0) {
            for (String key : properties.keySet()) {
                Object value = getType(properties.get(key));

                jsonData.put(key, value);
                jsonParam.put(key, value);
            }
        }

        assert properties != null;
        if(properties.containsKey("username")){
            jsonParam.put("api_username", RestServiceHelper.API_USERNAME);
            jsonParam.put("api_password", RestServiceHelper.API_PASSWORD);
        }else{
            jsonParam.put("username", RestServiceHelper.API_USERNAME);
            jsonParam.put("password", RestServiceHelper.API_PASSWORD);
        }


        jsonParam.put("data", jsonData);

        Log.d(TAG, "POST Parameters: ".concat(jsonParam.toString()));
        DataOutputStream printout = new DataOutputStream(conn.getOutputStream());

        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(printout, "UTF-8"));
        writer.write(jsonParam.toString());
        writer.close();

        printout.flush();
        printout.close();
    }

    public static String getJsonString(JSONObject data, String property) {
        try {
            return (data.get(property) == null || "null".equals(data.getString(property))) ? ""
                    : data.getString(property);
        } catch (Exception e) {
            return "";
        }
    }



    private static Object getType(String value) {
        try {
            return new JSONObject(value);
        } catch (Exception ex) {
            try {
                return new JSONArray(value);
            } catch (Exception ex1) {
                return value;
            }
        }
    }

    public static void close(Closeable closeable) {
        if (closeable == null) return;
        try {
            closeable.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
