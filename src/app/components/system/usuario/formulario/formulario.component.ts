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
  IntegrantesFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  SegmentoFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  ActividadFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  CantidadFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  FechaFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  EvidenciaFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  
  
  
  ngOnInit(): void {
  }

  /* MANEJO DEL ARRAY DE TASAS */

  //Inicializa el array de tasas
  tasas() : FormArray {
    return this.productForm.get("tasas") as FormArray
  }

  //Guardar valores para las tasas
  nuevaTasa(): FormGroup {
    return this.fb.group({
      detalle_tasa: this.descripcion.value,
      monto_tasa: this.monto.value,
    })
  }

  //Añadir los valores de las tasas al array de tasas
  agregarTasas() {
    if (this.descripcion.value && this.monto.value) {
      this.tasas().push(this.nuevaTasa());
      console.log(this.tasas().value)
      //limpiar controls
      this.descripcion.reset();
      this.monto.reset();
    } else {
      Swal.fire(
        'Es necesario ingresar la descripción y el monto de la tasa para agregarlo',
        environment.systemName,
        'warning'
      );
    }
  }

  //Quitar tasas del array
  quitarTasas(i:number) {
    this.tasas().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
