/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrganizacaoService } from '../organizacao.service';
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
    { active: true, comparisonOperator: "STARTS_WITH", field: "codigo", label: "Codigo",pedacos: ["codigo"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "superior.nome", label: "Superior",pedacos: ["superior", "nome"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "superior.codigo", label: "Codigo",pedacos: ["superior", "codigo"]},
  ];

  constructor(protected service: OrganizacaoService, protected router: Router, protected route: ActivatedRoute) {
    super(service,router,route);
  }

}