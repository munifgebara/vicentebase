import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperService } from '../../vic-components/comum/super-service';
import { BaseEntity } from '../../vic-components/comum/base-entity';
import { VicReturn } from '../../vic-components/comum/vic-return';


export class SuperDetalhesOmComponent implements OnInit {

    protected service: SuperService;

    public selecionado: BaseEntity;

    public setEditando = function (b: boolean) {
        console.log("original" + b);
    }

    erro = undefined;

    constructor(service: SuperService) {
        this.service = service;
    }

    ngOnInit(): void {
    }


    salvar() {
        this.service.update(this.selecionado)
            .then(salvo => {
                this.selecionado = salvo;
                this.setEditando(false);
            })
            .catch(erro => {
                this.erro = erro;
            });
    }

    cancelar() {
        this.setEditando(false);

    }

    excluir() {
        this.service.remove(this.selecionado.id)
            .then(obj => {
                this.selecionado = obj;
                this.setEditando(false);
            })
            .catch(erro => {
                erro = { message: "Impossível Excluir", description: "Este registro está sendo usado" }
                console.log(erro);
                this.erro = erro;
            });
    }

}

