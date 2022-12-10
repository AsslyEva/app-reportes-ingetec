import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AngularMaterialModule } from './angular-material.module';
import { TitleFrameComponent } from './title-frame/title-frame.component';

@NgModule({
  declarations: [
    SweetAlertComponent,
    TitleFrameComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    AngularMaterialModule,
],
  exports: [
    NgxSpinnerModule,
    AngularMaterialModule,
    SweetAlertComponent,
    TitleFrameComponent,
  ]

})
export class SharedModule { }
