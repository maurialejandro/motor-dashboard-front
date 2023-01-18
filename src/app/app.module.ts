import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from '@angular/material/menu';
import { ServiciosComponent } from './servicios/servicios.component';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { BarComponent } from './bar/bar.component';
import { AlertComponent } from './alert/alert.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    ListServiciosComponent,
    BarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
