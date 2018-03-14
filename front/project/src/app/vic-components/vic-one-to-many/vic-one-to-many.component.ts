import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { BaseEntity } from '../../vic-components/comum/base-entity';
import { SuperService } from '../../vic-components/comum/super-service';
import { VicReturn } from '../../vic-components/comum/vic-return';



@Component({
  selector: 'vic-one-to-many',
  template: `
  <div>{{status|json}}</div>
   <div class="container" >
    <vic-tabela  [dados]="dados" [colunas]="colunas" (acao)="edita($event)"></vic-tabela>
   </div>
  `,
  styleUrls: ['./vic-one-to-many.component.css']
})
export class VicOneToManyComponent implements OnInit {


  status = { editando: false };

  @Input() valor: BaseEntity[] = [];
  @Input() service: SuperService;
  @Input() colunas = [{ field: "id", label: "ID" }];
  dados = new VicReturn(this.valor);


  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

  }

  edita(evento) {
    console.log('VicOneToManyComponent', evento);
  }



}