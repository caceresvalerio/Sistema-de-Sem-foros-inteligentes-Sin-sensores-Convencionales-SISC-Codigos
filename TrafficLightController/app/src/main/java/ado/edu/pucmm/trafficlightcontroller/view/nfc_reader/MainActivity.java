package ado.edu.pucmm.trafficlightcontroller.view.nfc_reader;

import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentFilter;
import android.nfc.NdefMessage;
import android.nfc.NdefRecord;
import android.nfc.NfcAdapter;
import android.nfc.Tag;
import android.nfc.tech.Ndef;
import android.os.Parcelable;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import ado.edu.pucmm.trafficlightcontroller.view.map.MapsActivity;
import ado.edu.pucmm.trafficlightcontroller.R;
import ado.edu.pucmm.trafficlightcontroller.utils.ui.ViewUtilities;
import ado.edu.pucmm.trafficlightcontroller.view.map.MapsTestActivity;

public class MainActivity extends AppCompatActivity {

    private Toolbar toolbar;
    private NfcAdapter nfcAdapter;
    private Tag detectedTag;
    private IntentFilter[] readTagFilters;
    private PendingIntent pendingIntent;
    private EditText serverIp;
    private Button testButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        toolbar = (Toolbar) findViewById(R.id.toolbar);
        serverIp = (EditText) findViewById(R.id.serverIp);
        testButton = (Button) findViewById(R.id.testButton);
        setupActionBar();

        serverIp.setVisibility(View.GONE);
        initializeNfc();

        testButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ViewUtilities.startSubActivity(MainActivity.this, MapsTestActivity.class);
            }
        });
    }

    private void initializeNfc() {
        nfcAdapter = NfcAdapter.getDefaultAdapter(this);

        if (nfcAdapter == null) {
            Toast.makeText(this, "Este dispositivo no soporta NFC.", Toast.LENGTH_LONG).show();
            finish();
            return;
        }

        detectedTag = getIntent().getParcelableExtra(NfcAdapter.EXTRA_TAG);
        pendingIntent = PendingIntent.getActivity(getApplicationContext(), 0,
                new Intent(this, getClass()).
                        addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP), 0);

        IntentFilter tagDetected = new IntentFilter(NfcAdapter.ACTION_TAG_DISCOVERED);
        IntentFilter filter2 = new IntentFilter(NfcAdapter.ACTION_NDEF_DISCOVERED);
        readTagFilters = new IntentFilter[]{tagDetected, filter2};

    }

    private void setupActionBar() {
        setSupportActionBar(toolbar);
        final ActionBar actionBar = getSupportActionBar();

        actionBar.setDisplayHomeAsUpEnabled(false);
        actionBar.setDisplayShowTitleEnabled(true);
        actionBar.setElevation(0);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        if(intent.getAction().equals(NfcAdapter.ACTION_TAG_DISCOVERED)){
            detectedTag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
            handleIntent(intent);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        nfcAdapter.enableForegroundDispatch(this, pendingIntent, readTagFilters, null);
    }

    @Override
    protected void onPause() {
        super.onPause();
        nfcAdapter.disableForegroundDispatch(this);
    }

    private void handleIntent(Intent intent) {
        Ndef ndef = Ndef.get(detectedTag);

        try {
            ndef.connect();
            Parcelable[] messages = intent.getParcelableArrayExtra(NfcAdapter.EXTRA_NDEF_MESSAGES);

            if (messages != null) {
                NdefMessage[] ndefMessages = new NdefMessage[messages.length];

                for (int i = 0; i < messages.length; i++) {
                    ndefMessages[i] = (NdefMessage) messages[i];
                }

                NdefRecord record = ndefMessages[0].getRecords()[0];

                byte[] payload = record.getPayload();
                String textEncoding = ((payload[0] & 128) == 0) ? "UTF-8" : "UTF-16";
                int languageCodeLength = payload[0] & 0063;

                String text = new String(payload, languageCodeLength + 1, payload.length - languageCodeLength - 1, textEncoding);

                ViewUtilities.serverIp = text;
                ViewUtilities.startActivity(MainActivity.this, MapsActivity.class, NfcAdapter.EXTRA_TAG, detectedTag);
                ndef.close();

            }
        } catch (Exception e) {
            Toast.makeText(getApplicationContext(), "Tag no puede ser leida", Toast.LENGTH_LONG).show();
        }
    }
}
