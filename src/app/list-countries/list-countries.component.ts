import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countrySrv: CountryService, private router: Router) {
    this.countries = this.countrySrv.getCountries();
  }

  ngOnInit(): void {
  }

  goToCountry(nameCountry: string) {
    this.router.navigate(['/pays', nameCountry]);
  }

  onImgError(event: any, url: string) {
    event.target.src = url;
  }
}
