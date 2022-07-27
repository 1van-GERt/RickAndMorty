import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule  } from './modules/MaterialModule';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterCardComponent } from './components/characterCard/characterCard.component';
import { CharacterInfoComponent } from './components/characterInfo/characterInfo.component';
import { LocationsComponent } from './components/locations/locations.component'
import { LocationInfoComponent } from './components/locationInfo/locationInfo.component';
import { OutputListComponent } from './components/outputList/outputList.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    CharacterCardComponent,
    CharacterInfoComponent,
    LocationsComponent,
    LocationInfoComponent,
    OutputListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
