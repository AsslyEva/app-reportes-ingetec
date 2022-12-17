import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './components/shared/shared.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SweetAlertComponent } from './components/shared/sweet-alert/sweet-alert.component';
import { PagesLayoutComponent } from './layout/pages-layout/pages-layout.component';
import { SystemLayoutComponent } from './layout/system-layout/system-layout.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    PagesLayoutComponent,
    SystemLayoutComponent,
    LeftSidebarComponent,
    // SweetAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
