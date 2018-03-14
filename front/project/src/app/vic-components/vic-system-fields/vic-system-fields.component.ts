import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vic-system-fields',
  templateUrl: './vic-system-fields.component.html',
  styleUrls: ['./vic-system-fields.component.css']
})
export class VicSystemFieldsComponent implements OnInit {

  @Input() entidade;

  aberto=false;

  constructor() { }

  ngOnInit() {
  }

  abrir(){
    this.aberto=true;
  }
  fechar(){
    this.aberto=false;
  }

}
