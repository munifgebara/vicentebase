import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicSystemFieldsComponent } from './vic-system-fields.component';

describe('VicSystemFieldsComponent', () => {
  let component: VicSystemFieldsComponent;
  let fixture: ComponentFixture<VicSystemFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicSystemFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicSystemFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
