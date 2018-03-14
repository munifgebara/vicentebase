/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.munif.openprojects.vicentebase.domain;

import br.com.munif.framework.vicente.domain.BaseEntity;
import javax.persistence.Entity;
import org.hibernate.envers.Audited;

/**
 *
 * @author munif
 */
@Entity
@Audited
public class Categoria extends BaseEntity {

    private String nome;

    public Categoria() {
    }

    public Categoria(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
