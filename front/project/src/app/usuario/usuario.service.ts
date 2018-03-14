/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SuperService} from '../vic-components/comum/super-service';

@Injectable()
export class UsuarioService extends SuperService{

  constructor(http:Http) {
    super('usuario',http);
  }

}