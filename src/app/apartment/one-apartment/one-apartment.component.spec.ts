import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneApartmentComponent } from './one-apartment.component';

describe('OneApartmentComponent', () => {
  let component: OneApartmentComponent;
  let fixture: ComponentFixture<OneApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
