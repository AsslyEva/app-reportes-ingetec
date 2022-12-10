import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePersonalComponent } from './reporte-personal.component';

describe('ReportePersonalComponent', () => {
  let component: ReportePersonalComponent;
  let fixture: ComponentFixture<ReportePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
