import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsistenciaComponent } from './list-asistencia.component';

describe('ListAsistenciaComponent', () => {
  let component: ListAsistenciaComponent;
  let fixture: ComponentFixture<ListAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
