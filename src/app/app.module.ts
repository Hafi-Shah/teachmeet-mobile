import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular'; // Import MenuController

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
  ],
  providers: [
    MenuController, // Provide MenuController
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
