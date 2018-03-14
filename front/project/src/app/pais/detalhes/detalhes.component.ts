/* Arquivo gerado utilizando VICGERADOR por anderson as 13/03/2018 15:19:34 */
/* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PaisService } from '../pais.service';
import { VicReturn } from '../../vic-components/comum/vic-return';
import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhesComponent {

detalhesForm: FormGroup;

  constructor(protected service: PaisService, protected router: Router, protected route: ActivatedRoute,protected paisService:PaisService,
    private fb: FormBuilder, protected location: Location) {
    super(service,router,route);
         this.initForm();
  }


initForm() {

    if (this.selecionado === undefined || this.selecionado.version === null) {
        this.detalhesForm = this.fb.group({
        'nome': ['', Validators.compose([Validators.required])],
      });
    } else {
      this.service.getOne(this.selecionado["id"]).then(obj => {
        this.selecionado = obj;
        this.detalhesForm = this.fb.group({
          'nome': [this.selecionado['nome'], Validators.compose([Validators.required])],
        });
      });
    }

  }


  voltar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  cancelar() {
    this.initForm();
  }

  salvar() {
    this.service.update(this.selecionado)
      .then(salvo => {
        this.selecionado = salvo;
        this.msg.createSuccessAlert("Objeto salvo", "Operação realizada com sucesso");

        this.location.go("nacionalidade/detalhes/" + salvo.id);

        this.initForm();
      })
      .catch(erro => {
        this.msg.createErrorAlert("Erro", erro);
      });
  }
}