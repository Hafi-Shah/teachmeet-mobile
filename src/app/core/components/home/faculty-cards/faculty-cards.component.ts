import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MeetDialogComponent } from 'src/app/shared/Dialogs/meet-dialog/meet-dialog.component';

@Component({
  selector: 'app-faculty-cards',
  templateUrl: './faculty-cards.component.html',
  styleUrls: ['./faculty-cards.component.css'],
})
export class FacultyCardsComponent {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  async openMeetDialog() {
    const modal = await this.modalController.create({
      component: MeetDialogComponent,
      componentProps: {
        // Pass any props if needed
      },
    });
    return await modal.present();
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }
}
