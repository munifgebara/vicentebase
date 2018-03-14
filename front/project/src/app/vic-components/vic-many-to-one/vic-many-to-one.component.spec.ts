import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicManyToOneComponent } from './vic-many-to-one.component';

describe('VicManyToOneComponent', () => {
  let component: VicManyToOneComponent;
  let fixture: ComponentFixture<VicManyToOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicManyToOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicManyToOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
