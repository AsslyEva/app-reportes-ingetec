import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { map, Observable, startWith } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';


export interface User {
  name: string;
}

export class Cantidad {
  public cantidad?: number;
  public cantidad_rural: string | undefined;
	public cantidad_urbano: string | undefined;
	public fecha_acti?: Date;
}

export interface integrantes {
    id: number;
  name: string;
}



export const INTEGRANTES: integrantes[] = [
  { id: 2, name: "ASSLY" },
  { id: 3, name: "BRYAN" },
  { id: 4, name: "FRANCO" },
  { id: 5, name: "JANESSY" }
];
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  // inicializacion sedes
  sede = new FormControl('');
  sedesList: string[] = ['TARMA', 'LA OROYA', 'CARHUAMAYO', 'JUNIN'];
  multipleS: boolean = true;
  required: boolean = true;

  // configuracion cantidad
  productForm: FormGroup;
  rural =  new FormControl('');
  urbano =  new FormControl('');

  // configuracion autocomplete
  myControl = new FormControl<string | User>('');
  filteredOptions: Observable<User[]> | undefined;

  // inicializacion equipo
  integrantes = new FormControl('');
  lider = new FormControl('');


  value: Array<number> = [];

  // selectAll = false;

  printValue() {
    console.log(this.value);
  }
  
  // integrantes = [
  //   { id: 2, name: "ASSLY" },
  //   { id: 3, name: "BRYAN" },
  //   { id: 4, name: "JANESSY" },
  //   { id: 5, name: "FRANCO" }
  // ];

  // valueChange(id: number) {
  //   console.log(this.value.indexOf(id));
  //   if (this.value.indexOf(id) > -1) {
  //     const pos = this.value.indexOf(id);
  //     this.value.splice(pos, 1);
  //   } else {
  //     this.value.push(id);
  //   }
  //   console.log(this.value);
  // }

  // toggleAllSelection() {
  //   this.selectAll = !this.selectAll;
  //   if (this.selectAll == true) {
  //     this.value = [ 0, 2, 3, 4, 5];
  //   } else {
  //     this.value = [];
  //   }
  // }

  integrantesList: string[] = ['ANA', 'ERIKA', 'VICTOR', 'BRYAN', 'FRANCO', 'JANESSY'];
  searchUserForm!: FormGroup;

 // array is selectedYears
 selectedIntegrantes!: any[];
 intetrantesSelect!: any[];
 
 selectAll(select: MatSelect, values: any, array: any) {
  select.value = values;
  array = values;
  console.log(this.selectedIntegrantes); // selectedYears is still undefined
}

deselectAll(select: MatSelect) {
  this.selectedIntegrantes = [];
  select.value = [];
}

integrantesSelect = [
  {id: 0, viewValue: "2017"},
  {id: 2, viewValue: "ASSLY"},
  {id: 3, viewValue: "FRANCO"},
  {id: 4, viewValue: "BRYAN"},
  {id: 5, viewValue: "JANESSY"}
]




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

  constructor(
    private fb:FormBuilder,
    private _formBuilder: FormBuilder) {
      
    this.productForm = this.fb.group({
      cantidades: this.fb.array([]) ,
    });

  }

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

  /* MANEJO DEL ARRAY DE CANTIDADES */

  //Inicializa el array de cantidades
  cantidades() : FormArray {
    return this.productForm.get("cantidades") as FormArray
  }

  //Guardar valores para las cantidades
  nuevaCantidad(): FormGroup {
    return this.fb.group({
      cantidad_rural: this.rural.value,
      cantidad_urbano: this.urbano.value,
    })
  }

  //Añadir los valores de las cantidades al array de cantidades
  agregarCantidades() {
    if (this.rural.value && this.urbano.value) {
      this.cantidades().push(this.nuevaCantidad());
      console.log(this.cantidades().value)
      //limpiar controls
      this.rural.reset();
      this.urbano.reset();
    } else {
      Swal.fire(
        'Es necesario ingresar cantidad de urbano y rural, en caso no exista coloque "0", para agregarlo',
        environment.systemName,
        'warning'
      );
    }
  }

  //Quitar cantidad del array
  quitarCantidades(i:number) {
    this.cantidades().removeAt(i);
  }


    //registra las cantidades
    registrarCantidades(lista: Cantidad[]){
      
    }




  onSubmit() {
    console.log(this.productForm.value);
  }
}
