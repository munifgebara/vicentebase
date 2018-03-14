/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:38:28 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
//Munif
import { Component, OnInit, Input } from '@angular/core';
import { VicReturn } from '../../vic-components/comum/vic-return';
import { BaseEntity } from '../../vic-components/comum/base-entity';
import { ItemMovimentoService } from '../../itemmovimento/itemmovimento.service';
import { ProdutoService } from '../../produto/produto.service';


@Component({
    selector: 'app-movimento-itens',
    templateUrl: './movimento-itens.component.html',
    styleUrls: ['./detalhes.component.css']
})
export class MovimentoItensComponent implements OnInit {

    editando: boolean;
    selecionado: BaseEntity;
    erro;

    colunas = [
    { active: true, comparisonOperator: "STARTS_WITH", field: "produto.nome", label: "Produto",pedacos: ["produto", "nome"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "produto.categoria.nome", label: "Categoria",pedacos: ["produto", "categoria", "nome"]},
    { active: true, comparisonOperator: "EQUAL", field: "produto.quantidade", label: "Quantidade",pedacos: ["produto", "quantidade"]},
    { active: true, comparisonOperator: "EQUAL", field: "quantidade", label: "Quantidade",pedacos: ["quantidade"]},
    ];



    @Input() itens: BaseEntity[];
    @Input() proprietario: BaseEntity;
    lista: VicReturn;

    constructor(protected itemMovimentoService:ItemMovimentoService,protected produtoService:ProdutoService) {

    }

    ngOnInit() {
        this.atualiza();
    }

    edita(evento) {
        this.itemMovimentoService.getOne(evento).then(obj => {
            this.editando = true;
            this.selecionado = obj;
            this.selecionado['movimento'] = { id: this.proprietario.id, version: this.proprietario.version };
        })
    }

    criaVicReturnItens() {
        if (!this.lista) {
            this.lista = new VicReturn(this.itens);
        }
        return this.lista;

    }
    salvar() {
        this.itemMovimentoService.update(this.selecionado)
            .then(salvo => {
                this.selecionado = salvo;
                this.atualiza();
                this.editando = false;
            })
            .catch(erro => {
                console.log('salvar itemMovimento', erro);
                this.erro = erro;
            });
    }
    cancelar() {
        this.atualiza();
        this.editando = false;
    }
    excluir() {
        this.itemMovimentoService.remove(this.selecionado.id)
            .then(obj => {
                this.selecionado = obj;
                this.atualiza();
                this.editando = false;

            })
            .catch(erro => {
                console.log('excluir itemMovimento', erro);
                this.erro = { message: "Impossível Excluir", description: "Este registro está sendo usado" };
            });
    }
    atualiza() {
        this.itemMovimentoService
            .vquery({
                orderBy: 'id',
                query: {
                    logicalOperator: "OR",
                    subQuerys: [
                        {
                            criteria: {
                                comparisonOperator: "EQUAL",
                                field: "movimento.id", value: this.proprietario.id
                            }
                        }
                    ]
                }
            }).then(vr => {
                this.lista = vr;
                this.itens = vr.values;
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
  }}
