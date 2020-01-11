import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddstoreComponent } from './addstore/addstore.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlacesComponent } from './google-places/google-places.component';

const appRoutes: Routes = [
  { path: 'stores', component: HomeComponent },
  { path: 'addstore',component : AddstoreComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddstoreComponent,
    GooglePlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
