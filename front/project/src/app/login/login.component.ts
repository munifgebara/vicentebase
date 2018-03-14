import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMessage } from '../vic-components/alert-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erro = new AlertMessage();;
  loginForm: FormGroup;

  constructor(public loginService: LoginService, private router: Router, public usuarioService: UsuarioService,
    private fb: FormBuilder) {
    this.loginForm = fb.group({
      'loginInput': ['admin@munif.com.br', Validators.compose([Validators.required, Validators.email])],
      'senhaInput': ['qwe123', Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {
  }
  //logar(form) {
  logar() {

    if (!this.loginForm.valid) {
      this.erro.createErrorAlert("Dados inválidos", "Complete as informações e tente novamente");
      return;
    }

    this.loginService.loga(this.loginForm.value.loginInput, this.loginForm.value.senhaInput).then(r => {
      if (r.ok) {
        this.router.navigate([this.loginService.proximaUrl]);
      } else {
        this.erro.createErrorAlert("Login inválido", "Login ou senha incorretos. Tente novamente.");
      }
    });
  }

  criarUsuario() {
    if (!this.loginForm.valid) {
      this.erro.createErrorAlert("Dados inválidos", "Complete as informações e tente novamente");
      return;
    }

    this.usuarioService.add({ login: this.loginForm.value.loginInput, senha: this.loginForm.value.senhaInput })
      .then(r => {
        this.loginService.loga(this.loginForm.value.loginInput, this.loginForm.value.senhaInput).then(r => {
          if (r.ok) {
            this.router.navigate([this.loginService.proximaUrl]);
          }
        });
      });
  }


  logout() {
    this.loginService.logout().then(r => r);
    this.router.navigate(['/']);
  }

}


