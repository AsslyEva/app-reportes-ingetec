import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AngularMaterialModule } from './angular-material.module';
import { TitleFrameComponent } from './title-frame/title-frame.component';
import { DataTablesModule } from 'angular-datatables';
import { TituloDialogComponent } from './titulo-dialog/titulo-dialog.component';

@NgModule({
  declarations: [
    SweetAlertComponent,
    TitleFrameComponent,
    TituloDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    AngularMaterialModule,
    DataTablesModule,

],
  exports: [
    NgxSpinnerModule,
    AngularMaterialModule,
    SweetAlertComponent,
    TitleFrameComponent,
    DataTablesModule,
    TituloDialogComponent
  ]

})
export class SharedModule { }
