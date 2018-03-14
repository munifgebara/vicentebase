/* Arquivo gerado utilizando VICGERADOR por anderson as 13/03/2018 15:19:34 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  {
    path: 'pais', component: CrudComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'detalhes/:id', component: DetalhesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }