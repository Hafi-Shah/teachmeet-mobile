import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacultyCardsComponent } from './home/faculty-cards/faculty-cards.component';

@NgModule({
  declarations: [HomeComponent, FacultyCardsComponent],
  exports: [FacultyCardsComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
