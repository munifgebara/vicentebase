import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { VicComponentsModule } from './vic-components/vic-components.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AlertModule, AccordionModule } from 'ngx-bootstrap';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './vic-components/comum/principal/principal.component';
import { NaoexisteComponent } from './vic-components/comum/naoexiste/naoexiste.component';
import { PaisModule } from './pais/pais.module';
import { PaisService } from './pais/pais.service';
import { GrupoModule } from './grupo/grupo.module';
import { GrupoService } from './grupo/grupo.service';
import { OrganizacaoModule } from './organizacao/organizacao.module';
import { OrganizacaoService } from './organizacao/organizacao.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';
import { LoginComponent } from './login/login.component';
import { PietraGuardGuard } from './pietra-guard.guard';
import { LoginService } from './login/login.service';
import { ProdutoModule} from './produto/produto.module';
import { ProdutoService} from './produto/produto.service';
import { CategoriaModule} from './categoria/categoria.module';
import { CategoriaService} from './categoria/categoria.service';
import { ClienteModule} from './cliente/cliente.module';
import { ClienteService} from './cliente/cliente.service';
import { ItemMovimentoModule} from './itemmovimento/itemmovimento.module';
import { ItemMovimentoService} from './itemmovimento/itemmovimento.service';
import { MovimentoModule} from './movimento/movimento.module';
import { MovimentoService} from './movimento/movimento.service';
//app.module.ts1


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NaoexisteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    PaisModule,

    GrupoModule,
    OrganizacaoModule,
    UsuarioModule,

    ProdutoModule,
    CategoriaModule,
    ClienteModule,
    ItemMovimentoModule,
    MovimentoModule,
    //app.module.ts2
    VicComponentsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    GrupoService,
    OrganizacaoService,
    UsuarioService,
    PietraGuardGuard,
    LoginService,
    PaisService,
    ProdutoService,
    CategoriaService,
    ClienteService,
    ItemMovimentoService,
    MovimentoService,
    //app.module.ts3
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
