import { Pipe, PipeTransform } from '@angular/core';
import { BaseEntity } from '../vic-components/comum/base-entity';

@Pipe({
  name: 'excluirAtributosSistema'
})
export class ExcluirAtributosSistemaPipe implements PipeTransform {

  transform(values: any[], arg1: string = 'id'): any {
    if (values) {
      return values.map(obj => obj[arg1]);
    }
  }

}
