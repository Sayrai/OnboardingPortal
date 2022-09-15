import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

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
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    NavBarComponent,
    HttpClientModule,
  ]
})
export class SharedModule { }
