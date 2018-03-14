import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { VicTabelaComponent } from './vic-tabela/vic-tabela.component';
import { VicSystemFieldsComponent } from './vic-system-fields/vic-system-fields.component';
import { VicManyToOneComponent } from './vic-many-to-one/vic-many-to-one.component';
import { VicManyToManyComponent } from './vic-many-to-many/vic-many-to-many.component';
import { ExcluirAtributosSistemaPipe } from './excluir-atributos-sistema.pipe';
import { VicOneToManyComponent } from './vic-one-to-many/vic-one-to-many.component';


@NgModule({
  imports: [
    CommonModule,FormsModule

  ],
  declarations: [VicTabelaComponent, VicSystemFieldsComponent, VicManyToOneComponent, VicManyToManyComponent, ExcluirAtributosSistemaPipe, VicOneToManyComponent],
  exports:[VicTabelaComponent,VicSystemFieldsComponent,VicManyToOneComponent, VicManyToManyComponent, ExcluirAtributosSistemaPipe, VicOneToManyComponent]

})
export class VicComponentsModule { }
