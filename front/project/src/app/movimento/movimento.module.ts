/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:38:28 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VicComponentsModule } from '../vic-components/vic-components.module';
import { MovimentoRoutingModule } from './movimento-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { MovimentoItensComponent } from './detalhes/movimento-itens.component';
/*IMPORTS*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
    MovimentoRoutingModule,
    VicComponentsModule
  ],
  declarations: [
      MovimentoItensComponent,
/*DECLARATIONS*/
      CrudComponent, 
      ListaComponent, 
      DetalhesComponent
,]
})
export class MovimentoModule { }
