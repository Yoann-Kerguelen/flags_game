import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  nameCountry: string = "";
  country!: Country;

  constructor(private countrySrv: CountryService, private activatedRoute: ActivatedRoute) {
    this.nameCountry = this.activatedRoute.snapshot.params['nameCountry'];
    // console.log(this.nameCountry);
    let countries = this.countrySrv.getCountries();
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].name == this.nameCountry) {
        this.country = countries[index];
        //  console.log(this.country);
      }

    }

  }

  onImgError(event: any, url: string) {
    event.target.src = url;
  }

}
