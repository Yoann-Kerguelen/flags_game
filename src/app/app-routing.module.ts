import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { FormCountryComponent } from './form-country/form-country.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'liste-des-pays', component: ListCountriesComponent },
  { path: 'ajouter-pays', component: FormCountryComponent },
  { path: 'pays/:nameCountry', component: CountryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
