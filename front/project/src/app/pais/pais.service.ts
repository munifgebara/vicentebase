/* Arquivo gerado utilizando VICGERADOR por anderson as 13/03/2018 15:19:34 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SuperService} from '../vic-components/comum/super-service';

@Injectable()
export class PaisService extends SuperService{

  constructor(http:Http) {
    super('pais',http);
  }

}