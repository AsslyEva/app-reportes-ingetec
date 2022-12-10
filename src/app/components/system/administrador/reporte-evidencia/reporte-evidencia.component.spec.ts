import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEvidenciaComponent } from './reporte-evidencia.component';

describe('ReporteEvidenciaComponent', () => {
  let component: ReporteEvidenciaComponent;
  let fixture: ComponentFixture<ReporteEvidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteEvidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
