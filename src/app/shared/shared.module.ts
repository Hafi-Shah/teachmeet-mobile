import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule from Ionic
import { NgprimeModule } from './widgets/ngprime.module';

@NgModule({
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule, IonicModule, NgprimeModule], // Export IonicModule
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NgprimeModule,
  ], // Include IonicModule
})
export class SharedModule {}
