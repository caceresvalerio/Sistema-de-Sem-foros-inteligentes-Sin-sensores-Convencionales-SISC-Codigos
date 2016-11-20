/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solvex.dataobjects;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

/**
 *
 * @author Wilson
 */
public class ManualRequest implements Serializable {

    private BigInteger id;
    private BigInteger idAcceso;
    private BigInteger idEmpleado;
    private String username;
    private String nombreCompleto;
    private String proceso;
    private String accion;
    private int estado;
    private int actualizado;
    private Date fechaCreacion;
    private Date fechaModificacion;
    private BigInteger ticketId;
    private String mensajeLogProceso;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getProceso() {
        return proceso;
    }

    public void setProceso(String proceso) {
        this.proceso = proceso;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public BigInteger getIdAcceso() {
        return idAcceso;
    }

    public void setIdAcceso(BigInteger idAcceso) {
        this.idAcceso = idAcceso;
    }

    public BigInteger getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(BigInteger idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public int getActualizado() {
        return actualizado;
    }

    public void setActualizado(int actualizado) {
        this.actualizado = actualizado;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

    public BigInteger getTicketId() {
        return ticketId;
    }

    public void setTicketId(BigInteger ticketId) {
        this.ticketId = ticketId;
    }

    public String getMensajeLogProceso() {
        return mensajeLogProceso;
    }

    public void setMensajeLogProceso(String mensajeLogProceso) {
        this.mensajeLogProceso = mensajeLogProceso;
    }

}
