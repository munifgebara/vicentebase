import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SuperService } from './super-service';
import { BaseEntity } from "./base-entity";
import { VicReturn } from './vic-return';
import { AlertMessage } from '../alert-message';


export class SuperDetalhesComponent implements OnInit {

  selecionado: BaseEntity;
  erro = undefined;
  msg: AlertMessage;

  constructor(protected service: SuperService, protected router: Router, protected route: ActivatedRoute) {
    this.msg = new AlertMessage();
  }


  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getOne(params['id']))
      .subscribe((objeto) => {
        this.beforeSelect(objeto);
        this.selecionado = objeto;

      });
  }

  beforeSelect(obj: BaseEntity) {

  }


  salvar() {
    this.service.update(this.selecionado)
      .then(salvo => {
        this.selecionado = salvo;
        this.router.navigate(['../..'], { relativeTo: this.route });
      })
      .catch(erro => {
        this.erro = erro;
      });
  }

  salvarImediatamente() {
    this.service.update(this.selecionado)
      .then(salvo => {
        this.selecionado = salvo;
      })
      .catch(erro => {
        this.erro = erro;
      });
  }


  cancelar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
  excluir() {
    this.service.remove(this.selecionado.id)
      .then(obj => {
        this.selecionado = obj;
        this.router.navigate(['../..'], { relativeTo: this.route });
      })
      .catch(erro => {
        //erro = { message: "Impossível Excluir", description: "Este registro está sendo usado" }
        //console.log(erro);
        //this.erro = erro;
        this.msg.createErrorAlert("Impossível Excluir", "Este registro está sendo usado");
      });
  }

  public isOwner(obj): boolean {
    return obj && (obj.r.charAt(0) !== '_');
  }
  public commonGroup(obj): boolean {
    return obj && (obj.r.charAt(1) !== '_');
  }
  public canRead(obj): boolean {
    return obj && (obj.r.charAt(2) !== '_');
  }
  public canUpdate(obj): boolean {
    return obj && (obj.r.charAt(3) !== '_');
  }
  public canDelete(obj): boolean {
    return obj && (obj.r.charAt(4) !== '_');
  }

  public isNew(obj): boolean {
    return obj.version === null;
  }

  public notNew(obj): boolean {
    return obj.version !== null;
  }


}

