/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:38:28 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovimentoService } from '../movimento.service';
import { BaseEntity } from "../../vic-components/comum/base-entity";
import { VicReturn } from '../../vic-components/comum/vic-return';
import { SuperListaComponent } from '../../vic-components/comum/super-lista';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperListaComponent {

  colunas = [
    { active: true, comparisonOperator: "EQUAL", field: "quando", label: "Quando",pedacos: ["quando"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "cliente.nome", label: "Cliente",pedacos: ["cliente", "nome"]},
  ];

  constructor(protected service: MovimentoService, protected router: Router, protected route: ActivatedRoute) {
    super(service,router,route);
  }

}