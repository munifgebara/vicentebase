import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicManyToManyComponent } from './vic-many-to-many.component';

describe('VicManyToManyComponent', () => {
  let component: VicManyToManyComponent;
  let fixture: ComponentFixture<VicManyToManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicManyToManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicManyToManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
