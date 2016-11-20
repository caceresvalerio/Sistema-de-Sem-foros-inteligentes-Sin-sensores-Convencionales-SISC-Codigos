package ado.edu.pucmm.trafficlightcontroller.utils.ui;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Parcelable;
import android.support.v7.app.AlertDialog;
import android.support.v7.view.ContextThemeWrapper;

/**
 * Created by Wilson on 5/7/16.
 */
public class ViewUtilities {

    public static String serverIp;

    public static void startActivity(Activity firstActivity, Class<?> secondActivity){
        Intent mainIntent = new Intent(firstActivity, secondActivity);
        mainIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        firstActivity.startActivity(mainIntent);
        firstActivity.finish();
    }

    public static void startActivity(Activity firstActivity, Class<?> secondActivity, String extraName, Parcelable extraValue){
        Intent mainIntent = new Intent(firstActivity, secondActivity);
        mainIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        mainIntent.putExtra(extraName, extraValue);
        firstActivity.startActivity(mainIntent);
        firstActivity.finish();
    }

    public static void startSubActivity(Activity firstActivity, Class<?> secondActivity){
        Intent mainIntent = new Intent(firstActivity, secondActivity);
        firstActivity.startActivity(mainIntent);
    }

    public static void alert(Context context, int msgId, int titleId){
        String msg = context.getString(msgId);
        String title = context.getString(titleId);

        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(context, android.R.style.Theme_Holo_Light_Dialog));
        AlertDialog alertDialog = builder.create();
        alertDialog.setTitle(title);
        alertDialog.setMessage(msg);
        alertDialog.setCancelable(false);
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                });
        alertDialog.show();//Danger zone java.lang.IllegalStateException: You need to use a Theme.AppCompat theme (or descendant) with this activity.
    }

    public static void alert(Context context, String msg, int titleId){
        String title = context.getString(titleId);

        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(context, android.R.style.Theme_Holo_Light_Dialog));
        AlertDialog alertDialog = builder.create();
        alertDialog.setTitle(title);
        alertDialog.setMessage(msg);
        alertDialog.setCancelable(false);
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                });
        alertDialog.show();//Danger zone java.lang.IllegalStateException: You need to use a Theme.AppCompat theme (or descendant) with this activity.
    }

}
