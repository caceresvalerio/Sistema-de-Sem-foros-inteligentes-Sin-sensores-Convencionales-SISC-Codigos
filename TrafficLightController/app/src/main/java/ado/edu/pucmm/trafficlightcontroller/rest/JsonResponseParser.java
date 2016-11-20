package ado.edu.pucmm.trafficlightcontroller.rest;


import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by wgarcia on 9/20/2016.
 */
public class JsonResponseParser implements Parser {

    private JSONObject response;
    private String errorCode;
    private String message;

    @Override
    public JsonResponseParser parse(String responseString) {
        try {
            response = new JSONObject(responseString);

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return this;
    }

    public JSONObject getResponse(){
        return response;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getMessage() {
        return message;
    }
}
