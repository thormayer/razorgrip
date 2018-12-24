import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule,MatIconModule,MatFormFieldModule, MatListModule,MatCheckboxModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { CityComponent } from './components/city/city.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CityComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatListModule,  MatCheckboxModule,MatToolbarModule,MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
