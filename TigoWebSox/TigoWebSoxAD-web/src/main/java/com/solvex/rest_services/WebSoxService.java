/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solvex.rest_services;


import com.solvex.dataobjects.ManualRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

/**
 *
 * @author Wilson
 */
@Path("/websoxService")
@RequestScoped
public class WebSoxService {

    private static final Logger LOGGER = Logger.getLogger(WebSoxService.class.getName());

    public static final String CREDENTIAL_PROVIDER_LIST = "weblogic.wsee."
            + "security.wss.CredentialProviderList";
    public static final String TRUST_MANAGER = "weblogic.wsee.security.wss."
            + "TrustManager";
    
    public static Map<String, String> locations = new HashMap<>();
    
    
    @GET
    @Path(value="/getLocation")
    @Produces(value={"application/json"})
    public List<ManualRequest> getLocation() {
        ArrayList<ManualRequest> location = new ArrayList<ManualRequest>();
        for (Map.Entry entry : locations.entrySet()) {
            ManualRequest request = new ManualRequest();
            request.setAccion((String)entry.getValue());
            request.setProceso(entry.getKey().toString());
            location.add(request);
        }
        return location;
    }

    @GET
    @Path(value="/addLocation")
    @Produces(value={"application/json"})
    public ManualRequest addLocation(@QueryParam(value="code") String code, @QueryParam(value="location") String location) {
        locations.put(code, location);
        return new ManualRequest();
    }

    @GET
    @Path(value="/removeLocation")
    @Produces(value={"application/json"})
    public ManualRequest removeLocation(@QueryParam(value="code") String code) {
        locations.put(code, null);
        return new ManualRequest();
    }
    
    @GET
    @Path(value="/deleteLocation")
    @Produces(value={"application/json"})
    public ManualRequest deleteLocation(@QueryParam(value="code") String code) {
        locations.remove(code, null);
        return new ManualRequest();
    }

    
    

}
