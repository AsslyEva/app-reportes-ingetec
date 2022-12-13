import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReporteActividadesComponent } from './reporte-actividades/reporte-actividades.component';
import { ReportePersonalComponent } from './reporte-personal/reporte-personal.component';
import { ReporteEvidenciaComponent } from './reporte-evidencia/reporte-evidencia.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VerDetalleComponent } from './reporte-evidencia/ver-detalle/ver-detalle.component';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DetalleEvidenciaComponent } from './reporte-actividades/detalle-evidencia/detalle-evidencia.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AdministradorRoutingModule,
  ],
  declarations: [
    ReporteActividadesComponent,
    ReportePersonalComponent,
    ReporteEvidenciaComponent,
    VerDetalleComponent,
    DetalleEvidenciaComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-PE' },
  ]
})


export class AdministradorModule { }
