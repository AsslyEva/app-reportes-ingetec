import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VerDetalleComponent } from '../../system/administrador/reporte-evidencia/ver-detalle/ver-detalle.component';

@Component({
  selector: 'app-titulo-dialog',
  templateUrl: './titulo-dialog.component.html',
  styleUrls: ['./titulo-dialog.component.scss']
})
export class TituloDialogComponent implements OnInit {

  @Input() titulo: string | undefined= 'Titulo';
  @Output() messagestate = new EventEmitter<boolean>();
  message: any;

  constructor(    
    private dialogRef: MatDialogRef<VerDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }

  cerrar(){
    this.dialogRef.close();
  }

}
