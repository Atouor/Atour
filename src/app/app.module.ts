import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OriginalBackdropComponent } from './components/background-animation/original-backdrop.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashport/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/Hedear/header.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { TransferDataService } from './services/Transform.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    OriginalBackdropComponent,
    FooterComponent,
    BackgroundAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TransferDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
