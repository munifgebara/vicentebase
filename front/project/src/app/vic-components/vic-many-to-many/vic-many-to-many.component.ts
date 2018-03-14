import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseEntity } from '../../vic-components/comum/base-entity';
import { SuperService } from '../../vic-components/comum/super-service';

@Component({
  selector: 'vic-many-to-many',
  template: `
  <div *ngFor="let opcao of opcoes">
    <input type="checkbox"  name="tt" [(ngModel)]="op[opcao.id].status" (change)="mudou()" >{{opcao[atributoLabel]}}
   </div>
  `,
  styleUrls: ['./vic-many-to-many.component.css']
})
export class VicManyToManyComponent implements OnInit {

  op = {};

  opcoes: BaseEntity[];

  @Input() valor: BaseEntity[];
  @Output() valorChange = new EventEmitter<BaseEntity[]>();

  @Input() service: SuperService;
  @Input() atributoLabel: string;

  constructor() { }

  ngOnInit() {
    this.service.vquery({ orderBy: this.atributoLabel })
      .then(r => {
        this.opcoes = r.values;
        for (let i = 0; i < this.opcoes.length; i++) {
          this.op[this.opcoes[i].id] = { status: false, obj: this.opcoes[i] };
        }
        if (this.valor) {
          for (let i = 0; i < this.valor.length; i++) {
            this.op[this.valor[i].id].status = true;
          }
        }
      });
  }

  mudou() {
    this.valor = [];
    for (let i = 0; i < this.opcoes.length; i++) {
      if (this.op[this.opcoes[i].id].status) {
        this.valor.push(this.op[this.opcoes[i].id].obj);
      }
    }
    this.valorChange.emit(this.valor);
  }

}



