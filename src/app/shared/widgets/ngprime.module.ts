import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
  ],
  exports: [
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    SidebarModule,
  ],
  providers: [DialogService],
})
export class NgprimeModule {}
