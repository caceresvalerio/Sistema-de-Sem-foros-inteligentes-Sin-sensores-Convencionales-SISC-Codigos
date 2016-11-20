package ado.edu.pucmm.trafficlightcontroller.rest;


/**
 * Created by Wilson
 */
public abstract class Callable<T extends Parser> {

    private Class<T> clazz;

    public Callable(Class<T> clazz){
        this.clazz = clazz;
    }

    public <T extends Parser> T getParserInstance(){
        try {
            return (T) clazz.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

    public abstract void onPreExecute();
    public abstract void onPostExecute(T parser);
}
