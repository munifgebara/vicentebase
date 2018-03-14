import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicTabelaComponent } from './vic-tabela.component';

describe('VicTabelaComponent', () => {
  let component: VicTabelaComponent;
  let fixture: ComponentFixture<VicTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
