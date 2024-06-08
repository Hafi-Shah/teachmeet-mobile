import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private menuController: MenuController, private router: Router) {}

  toggleMenu() {
    console.log('Toggle menu clicked');
    this.menuController.toggle('end');
  }

  onRoute(path: any) {
    this.router.navigate([path]);
  }

  onLogout(path: any) {
    this.onRoute(path);
  }
}
