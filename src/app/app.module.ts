import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueComponentComponent } from './components/blue-component/blue-component.component';
import { GradientComponentComponent } from './components/gradient-component/gradient-component.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueComponentComponent,
    GradientComponentComponent,
    ImageComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
