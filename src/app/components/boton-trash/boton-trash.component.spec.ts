import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTrashComponent } from './boton-trash.component';

describe('BotonTrashComponent', () => {
  let component: BotonTrashComponent;
  let fixture: ComponentFixture<BotonTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonTrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
