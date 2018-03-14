import { Http, Headers, Response } from '@angular/http';
import { SuperService } from '../vic-components/comum/super-service';
import { Injectable } from '@angular/core';
import { Token } from '../vic-components/domain/token';


@Injectable()
export class LoginService {

    public static ins: LoginService;;

    public grupoAtual: any;

    public proximaUrl: string;

    public logado = false;

    public token: Token;

    public caminho = 'token';

    //public static BASE_URL = 'http://127.0.0.1:8080/api';
    public static BASE_URL = (location.origin + '/api').replace("4200", "8080");


    protected baseUrl = 'http://127.0.0.1:8080/api';

    constructor(protected http: Http) {
        this.baseUrl = LoginService.BASE_URL;
        console.log(this.baseUrl);
        LoginService.ins = this;
    }

    errorHandler = error => {
        return Promise.reject(error.json());
    }

    createAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('authorization', this.token.token);
        return headers;
    }

    loga(login: string, senha: string) {
        return this.http.post(`${this.baseUrl}/${this.caminho}/login/bypassword`, { login, senha })
            .toPromise().then(response => {
                let r = response.json();

                if (r.ok) {
                    this.logado = true;
                    this.token = r.token;
                    this.grupoAtual = this.token.usuario.grupos[0];
                }
                return r;
            })
            .catch(this.errorHandler);
    }
    logout() {
        this.logado = false;
        this.token = null;
        return this.http.post(`${this.baseUrl}/${this.caminho}/logout`, { login: null, senha: null })
            .toPromise().then(response => {
                this.logado = false;
                this.token = null;
                return response;
            })
            .catch(this.errorHandler);
    }

}

