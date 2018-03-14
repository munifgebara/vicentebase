import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperService } from './super-service';
import { BaseEntity } from "./base-entity";
import { VicReturn } from './vic-return';
import { AlertMessage } from '../alert-message';


export class SuperListaComponent implements OnInit {

    pesquisa = "";
    //erro = undefined;
    resposta: VicReturn = new VicReturn();
    colunas = [{ active: true, comparisonOperator: "EQUAL", field: "id", label: "ID", pedacos: ["id"] }];
    consulta = { hql: "obj.id > '_pesquisa' ", orderBy: "id" };
    msg: AlertMessage;

    constructor(protected service: SuperService, protected router: Router, protected route: ActivatedRoute) {
        this.msg = new AlertMessage();
    }

    ngOnInit() {
        this.pesquisar();
    }

    selecionouDescelecionouColuna(coluna) {
        this.pesquisar();
    }

    verificaEnter(evento) {
        if (evento.keyCode === 13) {
            this.pesquisar();
        }
    }

    goDetalhes(id: string) {
        this.router.navigate(['detalhes', id], { relativeTo: this.route });
    }

    novo() {
        this.router.navigate(['detalhes', 'new'], { relativeTo: this.route });
    }

    criaConsulta() {
        let q = {
            query: {
                logicalOperator: "OR",
                subQuerys: [],
                joins: [],

            },
            firstResult: 0,
            quantity: 20,
            orderBy: "id"
        };
        q.orderBy = this.colunas[0].field;
        this.colunas.forEach(coluna => {
            if (coluna.active) {
                let f = "";
                let t = coluna.pedacos.length;
                if (coluna.pedacos.length === 1) {
                    f = "obj." + coluna.pedacos[0];
                }
                else {
                    f = coluna.pedacos[t - 2] + '.' + coluna.pedacos[t - 1];
                }
                q.query.subQuerys.push({ criteria: { comparisonOperator: coluna.comparisonOperator, field: f, value: this.pesquisa } });

                if (t > 1) {
                    let tt = "obj";
                    for (let i = 0; i < t - 1; i++) {
                        tt += "." + coluna.pedacos[i];
                    }
                    tt += " " + coluna.pedacos[t - 2];
                    let o = { type: 'LEFT', table: tt };

                    if (q.query.joins.findIndex(j => j.type === o.type && j.table === o.table) < 0) {
                        q.query.joins.push(o);
                    }
                }

            }
        });
        return q;
    }

    pesquisar() {
        let consulta = this.criaConsulta();
        this.service.vquery(consulta)
            .then(r => {
                this.resposta = r;
            })
            .catch(erro => {
                //this.erro = erro;
                this.msg.createErrorAlert("", erro);
            });
    }


    carregarMais() {
        let consulta = this.criaConsulta();
        consulta.firstResult = this.resposta.firstResult + this.resposta.quantity;
        this.service.vquery(consulta)
            .then(r => {
                this.resposta.values = this.resposta.values.concat(r.values);
                this.resposta.firstResult = r.firstResult;
                this.resposta.quantity = r.quantity;
                this.resposta.hasMore = r.hasMore;
            })
            .catch(erro => {
                //this.erro = erro;
                this.msg.createErrorAlert("", erro);
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
