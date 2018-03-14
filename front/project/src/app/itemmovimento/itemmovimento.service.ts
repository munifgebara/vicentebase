/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:38:28 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SuperService} from '../vic-components/comum/super-service';

@Injectable()
export class ItemMovimentoService extends SuperService{

  constructor(http:Http) {
    super('itemmovimento',http);
  }

}