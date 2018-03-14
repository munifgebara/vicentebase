import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PrincipalComponent } from './vic-components/comum/principal/principal.component';
import { NaoexisteComponent } from './vic-components/comum/naoexiste/naoexiste.component';
import { LoginComponent } from './login/login.component';
import { PietraGuardGuard } from './pietra-guard.guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [PietraGuardGuard] },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: NaoexisteComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(r: Router) {
    this.logaRotas("/", r.config);
  }

  logaRotas(pai: String, rotas: Routes) {
    for (let i = 0; i < rotas.length; i++) {

      //console.log("path:", pai, rotas[i].path, rotas[i].component ? rotas[i].component : "-->" + rotas[i].redirectTo);
      if (rotas[i].children) {
        rotas[i].canActivate = [PietraGuardGuard];
        this.logaRotas(rotas[i].path + "/", rotas[i].children);
      }
    }

  }

}