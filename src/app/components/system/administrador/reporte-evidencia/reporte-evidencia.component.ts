import { LenguajeDataTable } from 'src/app/utils/utils';
import { Subject } from 'rxjs';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reporte-evidencia',
  templateUrl: './reporte-evidencia.component.html',
  styleUrls: ['./reporte-evidencia.component.scss']
})
export class ReporteEvidenciaComponent implements OnInit {

 //Configuracion para datatable
 dtOptions: ADTSettings = {};
 sede = "";
 segmento = "";
 actividad ="";
 fecha ='';
 
 actos: any[] = [
   {
     sede: "TARMA",
     segmento : "CONEXIONES NUEVAS BT",
     actividad : "Subterráneo Monofásico sin rotura ni resane de vereda",
     fecha : new Date(),
   },

   {
     sede: "TARMA",
     segmento : "REINSTALACION DE SERVICIO RS",
     actividad : "Instalación de medidor monofásico, caja e ITM",
     fecha : new Date(),
   },
 ];


 dtTrigger: Subject<any> = new Subject<any>();

 
 constructor(
  private dialog: MatDialog,
  private httpClient: HttpClient  
  ) {}

 ngOnInit(): void {
  //  const that = this;
   this.dtOptions = {
     dom: '<"top"if>rt<"bottom"lp><"clear">',
     pagingType: 'simple_numbers',
     pageLength: 5,
     lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]],
     language: LenguajeDataTable(),
     responsive: true,
     autoWidth: false,
     processing: true,
     order: [],
     columnDefs: [
       {
         targets: 2,
         orderable: false,
       },
       { className: "text-center align-middle border-bottom", "targets": [0, 1, 2] },
     ],
   };
  //  this.httpClient.get<any[]>('data/data.json')
  //  .subscribe(data => {
  //    this.actos = (data as any).data;
  //    // Calling the DT trigger to manually render the table
  //    this.dtTrigger.subscribe();
  //  });
 }

 ngOnDestroy(): void {
   // Do not forget to unsubscribe the event
   this.dtTrigger.unsubscribe();
 }

   verDetalle(){
    const dialogRef = this.dialog.open(VerDetalleComponent, {
      width: '500',
      autoFocus: false,
      disableClose: true,
      panelClass: 'myapp-no-padding-dialog',
      data: {}
    });
  }

}
