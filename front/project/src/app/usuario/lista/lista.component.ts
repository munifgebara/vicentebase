/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../usuario.service';
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
    { active: true, comparisonOperator: "STARTS_WITH", field: "login", label: "Login",pedacos: ["login"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "senha", label: "Senha",pedacos: ["senha"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "organizacao.nome", label: "Organizacao",pedacos: ["organizacao", "nome"]},
    { active: true, comparisonOperator: "STARTS_WITH", field: "organizacao.codigo", label: "Codigo",pedacos: ["organizacao", "codigo"]},
    { active: false, comparisonOperator: "STARTS_WITH", field: "organizacao.superior.nome", label: "Superior",pedacos: ["organizacao", "superior", "nome"]},
    { active: false, comparisonOperator: "STARTS_WITH", field: "organizacao.superior.codigo", label: "Codigo",pedacos: ["organizacao", "superior", "codigo"]},
  ];

  constructor(protected service: UsuarioService, protected router: Router, protected route: ActivatedRoute) {
    super(service,router,route);
  }

}