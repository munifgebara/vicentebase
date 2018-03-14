/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OrganizacaoService } from '../organizacao.service';
import { VicReturn } from '../../vic-components/comum/vic-return';
import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhesComponent {

  constructor(protected service: OrganizacaoService, protected router: Router, protected route: ActivatedRoute,protected organizacaoService:OrganizacaoService) {
    super(service,router,route);
  }


}
