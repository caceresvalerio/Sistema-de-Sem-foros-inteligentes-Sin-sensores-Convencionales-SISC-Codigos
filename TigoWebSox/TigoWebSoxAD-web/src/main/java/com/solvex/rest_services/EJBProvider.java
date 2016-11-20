/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solvex.rest_services;

//import com.sun.jersey.core.spi.component.ComponentContext;
//import com.sun.jersey.core.spi.component.ComponentScope;
//import com.sun.jersey.spi.inject.Injectable;
//import com.sun.jersey.spi.inject.InjectableProvider;

import javax.ejb.EJB;
import javax.naming.InitialContext;
import javax.ws.rs.ext.Provider;
import java.lang.reflect.Type;

/**
 * JAX-RS EJB Injection provider.
 */
@Provider
public class EJBProvider /*implements InjectableProvider<EJB, Type>*/ {

    /*@Override
    public Injectable getInjectable(ComponentContext cc, EJB arg1, Type t) {

        try {
            if (!(t instanceof Class)) {
                return null;
            }

            Class c = (Class) t;

            InitialContext ic = new InitialContext();

            final Object ejb = ic.lookup(c.getName());

            return new Injectable() {
                @Override
                public Object getValue() {
                    return ejb;
                }
            };
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public ComponentScope getScope() {
        return ComponentScope.Singleton;
    }*/
}
