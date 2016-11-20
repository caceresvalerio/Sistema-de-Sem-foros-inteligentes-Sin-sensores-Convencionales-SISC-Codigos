package ado.edu.pucmm.trafficlightcontroller.view.map;

import android.Manifest;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.location.Location;
import android.nfc.NfcAdapter;
import android.nfc.Tag;
import android.nfc.tech.Ndef;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.widget.Toast;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationListener;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.UUID;

import ado.edu.pucmm.trafficlightcontroller.R;
import ado.edu.pucmm.trafficlightcontroller.rest.Callable;
import ado.edu.pucmm.trafficlightcontroller.rest.JsonResponseParser;
import ado.edu.pucmm.trafficlightcontroller.rest.RestHandler;
import ado.edu.pucmm.trafficlightcontroller.utils.Callback;
import ado.edu.pucmm.trafficlightcontroller.utils.ui.ViewUtilities;
import ado.edu.pucmm.trafficlightcontroller.view.nfc_reader.MainActivity;

public class MapsTestActivity extends AppCompatActivity implements OnMapReadyCallback, GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener, LocationListener {

    private GoogleMap map;
    private Toolbar toolbar;
    private GoogleApiClient googleApiClient;
    private Location lastKnowLocation;
    private LocationRequest locationRequest;
    private Marker marker;

    private static final long UPDATE_INTERVAL_IN_MILLISECONDS = 1000;
    private static final long FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS =
            UPDATE_INTERVAL_IN_MILLISECONDS / 2;
    private static final int REQUEST_LOCATION = 2;

    private Timer timer;

    private String code;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);

        code = UUID.randomUUID().toString();
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setupActionBar();

        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);

        buildGoogleApiClient();

    }

    private synchronized void buildGoogleApiClient() {

        if (googleApiClient == null) {
            googleApiClient = new GoogleApiClient.Builder(this)
                    .addConnectionCallbacks(this)
                    .addOnConnectionFailedListener(this)
                    .addApi(LocationServices.API)
                    .build();
        }
        createLocationRequest();
    }

    private void createLocationRequest() {
        locationRequest = new LocationRequest();
        locationRequest.setInterval(UPDATE_INTERVAL_IN_MILLISECONDS);
        locationRequest.setFastestInterval(FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS);
        locationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);
    }

    private void startLocationUpdates() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        LocationServices.FusedLocationApi.requestLocationUpdates(
                googleApiClient, locationRequest, this);

        setupMap();
    }

    private void stopLocationUpdates() {
        LocationServices.FusedLocationApi.removeLocationUpdates(googleApiClient, this);
    }

    private void setupActionBar() {
        setSupportActionBar(toolbar);
        final ActionBar actionBar = getSupportActionBar();

        actionBar.setDisplayHomeAsUpEnabled(false);
        actionBar.setDisplayShowTitleEnabled(true);
        actionBar.setElevation(0);
    }





    @Override
    public void onMapReady(GoogleMap googleMap) {
        map = googleMap;

        map.setTrafficEnabled(true);
        map.getUiSettings().setMyLocationButtonEnabled(true);
        map.getUiSettings().setZoomControlsEnabled(true);

        map.clear();

        setupMap();


    }

    private void setupMap() {
        if (map != null) {
            if (lastKnowLocation != null) {
                MarkerOptions markerOptions = new MarkerOptions()
                        .position(new LatLng(lastKnowLocation.getLatitude(), lastKnowLocation.getLongitude()));

                marker = map.addMarker(markerOptions);

                CameraPosition cameraPosition = new CameraPosition.Builder()
                        .target(new LatLng(lastKnowLocation.getLatitude(), lastKnowLocation.getLongitude()))
                        .zoom(15)
                        .build();

                map.animateCamera(CameraUpdateFactory.newCameraPosition(cameraPosition));

                map.setOnMapClickListener(new GoogleMap.OnMapClickListener() {

                    @Override
                    public void onMapClick(final LatLng latlng) {
                        // TODO Auto-generated method stub

                        if (marker != null) {
                            marker.remove();
                        }

                        marker = map.addMarker(new MarkerOptions()
                                .position(latlng));

                        removeLocation(new Callback() {
                            @Override
                            public void execute(Map<String, Object> parameters) {
                                Location location = new Location("");
                                location.setLatitude(latlng.latitude);
                                location.setLongitude(latlng.longitude);
                                sendLocation(location);

                                Log.d("CODE", String.valueOf(latlng.latitude));
                                Log.d("CODE", String.valueOf(latlng.longitude));
                            }
                        });

                    }
                });

                sendLocation(lastKnowLocation);
            }
        }
    }

    @Override
    protected void onStart() {
        googleApiClient.connect();
        super.onStart();
    }

    @Override
    public void onResume() {
        super.onResume();

        if (googleApiClient.isConnected()) {
            startLocationUpdates();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (googleApiClient.isConnected()) {
            stopLocationUpdates();
        }
    }

    @Override
    protected void onStop() {
        googleApiClient.disconnect();
        super.onStop();

        this.removeLocation(null);
    }


    @Override
    public void onConnected(@Nullable Bundle bundle) {
        if (ActivityCompat.checkSelfPermission(this,
                Manifest.permission.ACCESS_FINE_LOCATION) !=
                PackageManager.PERMISSION_GRANTED &&
                ActivityCompat.checkSelfPermission(this,
                        Manifest.permission.ACCESS_COARSE_LOCATION) !=
                        PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.ACCESS_FINE_LOCATION,
                            Manifest.permission.ACCESS_COARSE_LOCATION},
                    REQUEST_LOCATION);

        } else {
            if (lastKnowLocation == null) {
                lastKnowLocation = LocationServices.FusedLocationApi.getLastLocation(googleApiClient);
                startLocationUpdates();
            }

        }

    }

    @Override
    public void onConnectionSuspended(int i) {
        googleApiClient.connect();
    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {

    }

    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           String[] permissions,
                                           int[] grantResults) {
        if (requestCode == REQUEST_LOCATION) {
            if (grantResults.length == 1
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                    return;
                }
                lastKnowLocation = LocationServices.FusedLocationApi.getLastLocation(googleApiClient);
            }
        }
    }

    @Override
    public void onLocationChanged(Location location) {

    }

    private void sendLocation(Location location) {

        HashMap<String, String> parameters = new HashMap<>();
        parameters.put("code", code);
        parameters.put("location", location.getLatitude() + "," + location.getLongitude());

        Log.d("CODE", "Add");
        Log.d("CODE", code);
        RestHandler restHandler = new RestHandler("198.199.77.198:7001/TigoWebSoxAD-web/rest/websoxService", "http://");
        restHandler.setEndPoint("/addLocation")
                .setHttpMethod("GET")
                .setParameters(parameters)
                .call(new Callable<JsonResponseParser>(JsonResponseParser.class) {
                    @Override
                    public void onPreExecute() {

                    }

                    @Override
                    public void onPostExecute(JsonResponseParser parser) {
                        System.out.println("AQUI");
                    }
                });
    }

    private void removeLocation(final Callback callback) {

        HashMap<String, String> parameters = new HashMap<>();
        parameters.put("code", code);

        Log.d("CODE", "Remove");
        Log.d("CODE", code);
        RestHandler restHandler = new RestHandler("198.199.77.198:7001/TigoWebSoxAD-web/rest/websoxService", "http://");
        restHandler.setEndPoint("/removeLocation")
                .setHttpMethod("GET")
                .setParameters(parameters)
                .call(new Callable<JsonResponseParser>(JsonResponseParser.class) {
                    @Override
                    public void onPreExecute() {

                    }

                    @Override
                    public void onPostExecute(JsonResponseParser parser) {
                        if(callback != null) {
                            callback.execute(null);
                        }
                    }
                });
    }
}
