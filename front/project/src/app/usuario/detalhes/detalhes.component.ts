/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../usuario.service';
import { OrganizacaoService } from '../../organizacao/organizacao.service';
import { GrupoService } from '../../grupo/grupo.service';
import { VicReturn } from '../../vic-components/comum/vic-return';
import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhesComponent {

  constructor(protected service: UsuarioService, protected router: Router, protected route: ActivatedRoute,protected grupoService:GrupoService,protected organizacaoService:OrganizacaoService,protected usuarioService:UsuarioService) {
    super(service,router,route);
  }


}
