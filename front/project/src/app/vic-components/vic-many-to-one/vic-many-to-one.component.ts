import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseEntity } from '../../vic-components/comum/base-entity';
import { SuperService } from '../../vic-components/comum/super-service';

@Component({
  selector: 'vic-many-to-one',
  //templateUrl: './vic-many-to-one.component.html',
  template: `
  <div class="input-group">
    <select [compareWith]="byId" [ngModel]="valor" (ngModelChange)="onValorChange($event)"  class="form-control" (keydown)="filtra($event)"  >
    <option value> Nenhum </option>
    <option *ngFor="let opcao of opcoes" [ngValue]="opcao" >{{resolve(opcao,atributoLabel)}}    </option>

    
    </select>
    <span class="input-group-addon cinza">{{this.atributoLabel}}:{{filtro}}%</span>
  </div>
      `,
  styleUrls: ['./vic-many-to-one.component.css']
})
export class VicManyToOneComponent implements OnInit {

  opcoes: BaseEntity[];
  filtro = "";

  @Input() valor: BaseEntity;
  @Output() valorChange = new EventEmitter<BaseEntity>();

  @Input() service: SuperService;
  @Input() atributoLabel: string;

  constructor() { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.service.singleLikeCriteriaQuery(this.atributoLabel, this.filtro).then(r => this.opcoes = r.values);
  }

  onValorChange(obj: BaseEntity) {
    if (obj.id) {
      this.valor = obj;
    }
    else {
      this.valor = null;
    }

    this.valorChange.emit(this.valor);
  }

  byId(o1: BaseEntity, o2: BaseEntity) {
    if (!o1 || !o2) {
      return false;
    }
    return o1.id === o2.id;
  }

  filtra(event) {
    if (event.keyCode === 46) {
      this.filtro = "";
    }
    else if (event.keyCode === 8 && this.filtro.length > 0) {
      this.filtro = this.filtro.slice(0, -1);
    }
    else if (event.keyCode >= 48 && event.keyCode <= 90) {
      this.filtro = this.filtro + event.key;
    }
    else {
      //console.log("else ", event.keyCode);
    }
    this.atualiza();
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



}

