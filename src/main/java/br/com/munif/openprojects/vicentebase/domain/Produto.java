/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.munif.openprojects.vicentebase.domain;

import br.com.munif.framework.vicente.domain.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import org.hibernate.envers.Audited;

/**
 *
 * @author munif
 */
@Entity
@Audited
public class Produto extends BaseEntity {

    private String nome;

    @ManyToOne
    private Categoria categoria;

    private Integer quantidade;

    public Produto() {
    }

    public Produto(String nome, Categoria categoria, Integer quantidade) {
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

}
