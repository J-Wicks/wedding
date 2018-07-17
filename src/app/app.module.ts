import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameMapComponent } from './game-map/game-map.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SvgCanvasComponent } from './svg-canvas/svg-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    GameMapComponent,
    CarouselComponent,
    SvgCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
