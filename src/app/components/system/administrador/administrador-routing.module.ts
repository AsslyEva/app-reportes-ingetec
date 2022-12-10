import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteActividadesComponent } from './reporte-actividades/reporte-actividades.component';
import { ReporteEvidenciaComponent } from './reporte-evidencia/reporte-evidencia.component';
import { ReportePersonalComponent } from './reporte-personal/reporte-personal.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: ReporteActividadesComponent
  },
  {
    path: 'personal',
    component: ReportePersonalComponent
  },
  {
    path: 'evidencia',
    component: ReporteEvidenciaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministradorRoutingModule { }
