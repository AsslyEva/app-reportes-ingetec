import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalle-evidencia',
  templateUrl: './detalle-evidencia.component.html',
  styleUrls: ['./detalle-evidencia.component.scss']
})
export class DetalleEvidenciaComponent implements OnInit {
  titulo: string = "Ver detalle de evidencia enviada";

  @Output() messagestate = new EventEmitter<boolean>();
  message: any;
  constructor(
    private dialogRef: MatDialogRef <DetalleEvidenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

}