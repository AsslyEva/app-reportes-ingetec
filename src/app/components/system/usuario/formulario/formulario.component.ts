import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
export interface Registro {
  id_categoria: number;
  nombre_categoria: string;
  cantidad?: number;
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  registros: Registro[] = [];
  productForm: any;
  fb: any;
  descripcion: any;
  monto: any;
  // cantidades ejecutadas
  // urbano= 0 ;
  // rural= 0;


  // configuracion subir evidencia
  @ViewChild('inputfile')
  inputfile!: ElementRef;
  @Output() messagestate = new EventEmitter<boolean>();
  message: any;
  nameLabel: string = 'Seleccione archivo';

  clearNameInput(){
    (this.inputfile.nativeElement.files[0])
      ? this.nameLabel = this.inputfile.nativeElement.files[0].name
      : this.nameLabel = 'Seleccione evidencia';
    }

  closeState(){
  this.messagestate.emit(true)
  }

  tinyAlert() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Archivo subido exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
    
  }

  // color configuracion selec
  colorControl = new FormControl('primary' as ThemePalette);

  constructor(private _formBuilder: FormBuilder) {}
  SedeFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  LiderFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  IntegrantesFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});
  SegmentoFormGroup: FormGroup = this._formBuilder.group({fourthCtrl: ['']});
  ActividadFormGroup: FormGroup = this._formBuilder.group({fifthCtrl: ['']});
  CantidadFormGroup: FormGroup = this._formBuilder.group({sixthCtrl: ['']});
  FechaFormGroup: FormGroup = this._formBuilder.group({seventhCtrl: ['']});
  EvidenciaFormGroup: FormGroup = this._formBuilder.group({eighthCtrl: ['']});

  
  
  
  ngOnInit(): void {
  }

  

}
