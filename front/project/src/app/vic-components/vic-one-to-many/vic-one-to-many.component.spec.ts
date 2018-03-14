import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicOneToManyComponent } from './vic-one-to-many.component';

describe('VicOneToManyComponent', () => {
  let component: VicOneToManyComponent;
  let fixture: ComponentFixture<VicOneToManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicOneToManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicOneToManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
