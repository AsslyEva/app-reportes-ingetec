import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReporteActividadesComponent } from './reporte-actividades/reporte-actividades.component';
import { ReportePersonalComponent } from './reporte-personal/reporte-personal.component';
import { ReporteEvidenciaComponent } from './reporte-evidencia/reporte-evidencia.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../../shared/shared.module';


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

    ]
})


export class AdministradorModule { }
