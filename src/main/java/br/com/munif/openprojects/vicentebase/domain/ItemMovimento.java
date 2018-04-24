/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.munif.openprojects.vicentebase.domain;

import br.com.munif.framework.vicente.domain.BaseEntity;
import br.com.munif.framework.vicente.domain.BaseEntityHelper;
import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import org.hibernate.envers.Audited;

/**
 *
 * @author munif
 */
@Entity
@Audited
public class ItemMovimento extends BaseEntity {

    @ManyToOne
    private Produto produto;

    private BigDecimal valorUnitario;

    private Integer quantidade;

    @ManyToOne
    private Movimento movimento;

    public ItemMovimento() {
        quantidade = 1;
    }

    public ItemMovimento(BigDecimal valorUnitario, Integer quantidade, Movimento movimento, Produto produto) {
        BaseEntityHelper.setBaseEntityFields(this);
        this.valorUnitario = valorUnitario;
        this.quantidade = quantidade;
        this.movimento = movimento;
        this.produto = produto;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public BigDecimal getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(BigDecimal valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Movimento getMovimento() {
        return movimento;
    }

    public void setMovimento(Movimento movimento) {
        this.movimento = movimento;
    }

}
