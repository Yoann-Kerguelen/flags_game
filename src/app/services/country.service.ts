import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Country[] = [];

  constructor() {
    let france = new Country("France", "Paris", 70000000, "euros", "france.png", "Europe");
    let allemagne = new Country("Allemagne", "Berlin", 80000000, "euros", "germany.png", "Europe");
    let espagne = new Country("Espagne", "Madrid", 47000000, "euros", "spain.png", "Europe");
    let italie = new Country("Italie", "Rome", 60000000, "euros", "italy.png", "Europe");
    let coree = new Country("Corée du Sud", "Séoul", 51000000, "Won", "south_korea.png", "Asie");

    this.countries.push(france);
    this.countries.push(allemagne);
    this.countries.push(espagne);
    this.countries.push(italie);
    this.countries.push(coree);
  }

  getCountries() {
    return this.countries;
  }

  addCountry(country: Country) {
    this.countries.push(country);
  }
}
