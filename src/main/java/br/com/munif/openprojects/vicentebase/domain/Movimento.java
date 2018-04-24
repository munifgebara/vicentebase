/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.munif.openprojects.vicentebase.domain;

import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.ZonedDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import org.hibernate.envers.Audited;

/**
 *
 * @author munif
 */
@Entity
@Audited
public class Movimento extends BaseEntity {

    private ZonedDateTime quando;

    @ManyToOne
    private Cliente cliente;

    @OneToMany(mappedBy = "movimento", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"movimento"})
    private List<ItemMovimento> itens;

    public Movimento() {
        quando = ZonedDateTime.now();
    }

    public Movimento(Cliente cliente) {
        BaseEntityHelper.setBaseEntityFields(this);
        this.cliente = cliente;
        quando = ZonedDateTime.now();
    }

    public ZonedDateTime getQuando() {
        return quando;
    }

    public void setQuando(ZonedDateTime quando) {
        this.quando = quando;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<ItemMovimento> getItens() {
        return itens;
    }

    public void setItens(List<ItemMovimento> itens) {
        this.itens = itens;
    }

}
