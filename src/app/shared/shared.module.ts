import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule from Ionic
import { NgprimeModule } from './widgets/ngprime.module';
import { MeetDialogComponent } from './Dialogs/meet-dialog/meet-dialog.component';

@NgModule({
  declarations: [
    MeetDialogComponent
  ],
  exports: [ReactiveFormsModule, FormsModule, IonicModule, NgprimeModule], // Export IonicModule
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NgprimeModule,
  ],
})
export class SharedModule {}
