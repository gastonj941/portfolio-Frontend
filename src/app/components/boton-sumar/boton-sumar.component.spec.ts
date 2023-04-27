import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSumarComponent } from './boton-sumar.component';

describe('BotonSumarComponent', () => {
  let component: BotonSumarComponent;
  let fixture: ComponentFixture<BotonSumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSumarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
