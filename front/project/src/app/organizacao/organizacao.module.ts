/* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VicComponentsModule } from '../vic-components/vic-components.module';
import { OrganizacaoRoutingModule } from './organizacao-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

/*IMPORTS*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
    OrganizacaoRoutingModule,
    VicComponentsModule
  ],
  declarations: [
/*DECLARATIONS*/
      CrudComponent, 
      ListaComponent, 
      DetalhesComponent
,]
})
export class OrganizacaoModule { }
