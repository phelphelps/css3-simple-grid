import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueCardComponent } from './components/blue-card/blue-card.component';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueCardComponent,
    GradientCardComponent,
    ImageCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
