/* Arquivo gerado utilizando VICGERADOR por anderson as 13/03/2018 15:19:35 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../pais.service';
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
    { active: true, comparisonOperator: "STARTS_WITH", field: "nome", label: "Nome",pedacos: ["nome"]},
  ];

  constructor(protected service: PaisService, protected router: Router, protected route: ActivatedRoute) {
    super(service,router,route);
  }

}