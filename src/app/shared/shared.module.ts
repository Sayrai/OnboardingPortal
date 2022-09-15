import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    NavBarComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
