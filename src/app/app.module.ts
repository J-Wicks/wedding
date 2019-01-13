import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameMapComponent } from './game-map/game-map.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SvgCanvasComponent } from './svg-canvas/svg-canvas.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GameMapComponent,
    CarouselComponent,
    SvgCanvasComponent,
    MainPanelComponent,
    RsvpFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
