import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AreaPage } from './area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Asegúrate de importar ReactiveFormsModule
    IonicModule
  ],
  declarations: [AreaPage]
})
export class AreaPageModule {}
