/* Arquivo gerado utilizando VICGERADOR por munif as 14/03/2018 06:38:28 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  {
    path: 'categoria', component: CrudComponent,
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
export class CategoriaRoutingModule { }