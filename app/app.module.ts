import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PexampleComponent } from './pexample/pexample.component';
import { BexampleComponent } from './bexample/bexample.component';
import { AnimalsComponent } from './animals/animals.component';
import { CpipePipe } from './cpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PexampleComponent,
    BexampleComponent,
    AnimalsComponent,
    CpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
