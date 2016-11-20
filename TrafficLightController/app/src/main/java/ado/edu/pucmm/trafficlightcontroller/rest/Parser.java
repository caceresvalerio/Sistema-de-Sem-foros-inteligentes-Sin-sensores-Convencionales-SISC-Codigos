package ado.edu.pucmm.trafficlightcontroller.rest;

/**
 * Created by wgarcia on 9/20/2016.
 */
public interface Parser {
    public static enum ParserType {
        JSON, LIST
    }

    Parser parse(String responseString);
}
