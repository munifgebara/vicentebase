import { Http, Headers, Response } from '@angular/http';
import { LoginService } from '../../login/login.service';
import { Injector } from '@angular/core';

export class SuperService {


  public baseUrl = '';
  protected collection = '';
  protected http: Http;

  constructor(colecao: string, http: Http) {
    this.http = http;
    this.collection = colecao;
    this.baseUrl = LoginService.BASE_URL;
  }


  errorHandler = error => {
    return Promise.reject(error.json());
  }

  createAuthorizationHeader(): Headers {
    let headers = new Headers();
    headers.append('authorization', LoginService.ins.token.token);
    headers.append('group', LoginService.ins.grupoAtual.codigo);
    return headers;

  }

  add(objeto) {
    return this.http.post(`${this.baseUrl}/${this.collection}`, objeto, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  vquery(objeto) {
    return this.http.post(`${this.baseUrl}/${this.collection}/vquery`, objeto, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  singleLikeCriteriaQuery(field, pesquisa) {
    let consulta = this.criaConsulta([{ active: true, comparisonOperator: 'STARTS_WITH', field: field }], pesquisa);
    consulta.maxResults = 10000;
    return this.http.post(`${this.baseUrl}/${this.collection}/vquery`, consulta
      , { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }


  getAll(): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  getOne(id): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  newObject(): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/new`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  remove(id) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    return this.http.put(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  criaConsulta(colunas, pesquisa) {
    let q = {
      query: {
        logicalOperator: "OR",
        subQuerys: [],
        joins: [],
      },
      orderBy: "id",
      maxResults: 20
    };
    q.orderBy = colunas[0].field;
    colunas.forEach(coluna => {
      if (coluna.active) {
        q.query.subQuerys.push({ criteria: { comparisonOperator: coluna.comparisonOperator, field: coluna.field, value: pesquisa } });
      }
    });
    return q;
  }


}

