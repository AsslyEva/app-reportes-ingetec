import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})
export class VerDetalleComponent implements OnInit {
  titulo:string = "DETALLE DE EVIDENCIA";
  @Output() messagestate = new EventEmitter<boolean>();

  documento: any;

  constructor(
    private dialogRef: MatDialogRef<VerDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  closeState(){
    this.messagestate.emit(true)
  }


  descargarDocumento(){
    let nombre_archivo = `${this.documento.nombre}`;
    // saveAs(this.blob, nombre_archivo);
  }

}
