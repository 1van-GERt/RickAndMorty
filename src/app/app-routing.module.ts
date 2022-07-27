import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterInfoComponent } from './components/characterInfo/characterInfo.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationInfoComponent } from './components/locationInfo/locationInfo.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/:id', component: CharacterInfoComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'locations/:id', component: LocationInfoComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
