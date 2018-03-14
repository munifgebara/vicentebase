import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { BaseEntity } from './vic-components/comum/base-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pesquisa = "";
  rota = "./principal";

  constructor(public loginService: LoginService, private router: Router) {

  }

  sair() {
    this.loginService.logout().then(r => {
      this.router.navigate(['/principal']);
    });
  }

  ngOnInit(): void {

  }

  desativaTodos() {
    this.menu.forEach(i => {
      i.active = false;
    });
  }

  onMenuPaiClick(item) {
    let novoEstado = !item.active;
    this.desativaTodos();
    item.active = novoEstado;
  }

  onValorChange(obj: BaseEntity) {
    this.loginService.grupoAtual = obj;
  }


  onMenuClick(e) {
    this.desativaTodos();
    e.active = true;
  }


  onSubMenuClick(item, subItem) {
    item.subItens.forEach(i => i.active = false);
    subItem.active = true;
  }

  byId(o1: BaseEntity, o2: BaseEntity) {
    if (!o1 || !o2) {
      return false;
    }
    return o1.id === o2.id;
  }

  menu = [






{ link: './produto', iconeTipo: 'fas', icone: 'fa-home', label: 'Produto', active: false },

{ link: './categoria', iconeTipo: 'fas', icone: 'fa-home', label: 'Categoria', active: false },

{ link: './cliente', iconeTipo: 'fas', icone: 'fa-home', label: 'Cliente', active: false },

{ link: './itemmovimento', iconeTipo: 'fas', icone: 'fa-home', label: 'ItemMovimento', active: false },

{ link: './movimento', iconeTipo: 'fas', icone: 'fa-home', label: 'Movimento', active: false },

    /* MENU  */
    { link: './principal', iconeTipo: 'fas', icone: 'fa-home', label: 'Principal', active: false },
    {
      label: 'Localização', iconeTipo: 'fas', icone: 'fa-map-marker-alt', active: false,
      subItens: [
        { link: './pais', iconeTipo: 'fas', icone: 'fa-globe', label: 'Países', active: false },
      ]
    },
    {
      label: 'Segurança', iconeTipo: 'fas', icone: 'fa-lock', active: false,
      subItens: [
        { link: './grupo', iconeTipo: 'fas', icone: 'fa-sitemap', label: 'Grupo', active: false },
        { link: './organizacao', iconeTipo: 'fas', icone: 'fa-university', label: 'Organização', active: false },
        { link: './usuario', iconeTipo: 'far', icone: 'fa-user', label: 'Usuário', active: false }
      ]
    }
  ];


}
