/* Arquivo gerado utilizando VICGERADOR por anderson as 13/03/2018 15:19:34 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VicComponentsModule } from '../vic-components/vic-components.module';
import { PaisRoutingModule } from './pais-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BrowserModule } from '@angular/platform-browser'
;
/*IMPORTS*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
    PaisRoutingModule,
    VicComponentsModule,
    BrowserModule,    
    ReactiveFormsModule 
  ],
  declarations: [
/*DECLARATIONS*/
      CrudComponent, 
      ListaComponent, 
      DetalhesComponent
,]
})
export class PaisModule { }
