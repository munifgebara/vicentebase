import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VicReturn } from '../../vic-components/comum/vic-return';
import { BaseEntity } from '../../vic-components/comum/base-entity';

@Component({
  selector: 'vic-tabela',
  templateUrl: './vic-tabela.component.html',
  styleUrls: ['./vic-tabela.component.css']
})
export class VicTabelaComponent implements OnInit {

  @Input() dados: VicReturn = new VicReturn();
  @Input() colunas: any[];
  @Input() selecionaColunas: boolean = true;
  @Output() acao: EventEmitter<any> = new EventEmitter();
  @Output() colunaMudou: EventEmitter<any> = new EventEmitter();
  @Output() carregarMais: EventEmitter<any> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {

  }

  colunasAtivas() {
    return this.colunas.filter(c => c.active);
  }

  onClick(id: string) {
    this.acao.emit(id);
  }

  resolve(obj, coluna: string) {

    let partes = coluna.split(".");
    let o = obj[partes[0]];
    for (let i = 1; i < partes.length; i++) {
      if (o === null) {
        return null;
      }
      if (o === undefined) {
        return undefined;
      }
      o = o[partes[i]];
    }
    return o;
  }

  todasApagadas() {
    return !this.colunas.some(r => r.active);
  }

  carregaMais() {
    this.carregarMais.emit();
  }

  mudouColuna(coluna) {
    this.colunaMudou.emit(coluna);
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
