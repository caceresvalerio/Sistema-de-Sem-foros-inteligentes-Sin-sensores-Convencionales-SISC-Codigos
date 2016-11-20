package com.solvex;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.util.logging.Level;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.event.ActionEvent;
import java.util.logging.Logger;
import com.solvex.util.MessageUtil;
import javax.ejb.EJB;
import org.primefaces.context.RequestContext;

/**
 *
 * @author Wilson
 */
@ManagedBean(name = "loginBean")
@RequestScoped
public class LoginBean {

    private static final Logger LOGGER = Logger.getLogger(LoginBean.class.getName());
    private String username;
    private String password;

    
    public LoginBean() {
    }

    public void execute(ActionEvent event) {
        
    }

    private boolean validate() {
        LOGGER.info("validate() :: START");
        boolean result = true;
        if (username == null || username.isEmpty()) {
            MessageUtil.addMessage("Debe de introducir el Username", "loginForm");
            result = false;
        }

        if (password == null || password.isEmpty()) {
            MessageUtil.addMessage("Debe de introducir el Password", "loginForm");
            result = false;
        }

        LOGGER.info("validate() :: END");
        return result;

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
