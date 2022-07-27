import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-form-country',
  templateUrl: './form-country.component.html',
  styleUrls: ['./form-country.component.scss']
})
export class FormCountryComponent implements OnInit {

  country!: Country;

  countryForm = this.fb.group({
    name: ["", [Validators.minLength(3), Validators.required]],
    flag: ["", [Validators.required]],
    capital: ["", [Validators.minLength(3), Validators.required]],
    population: [0, [Validators.min(1), Validators.required]],
    currency: ["", [Validators.minLength(1), Validators.required]],
    area: ["", [Validators.minLength(2), Validators.required]],
  });

  constructor(private countrySrv: CountryService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.country = new Country(this.countryForm.value.name!, this.countryForm.value.capital!, this.countryForm.value.population!, this.countryForm.value.currency!, this.countryForm.value.flag!, this.countryForm.value.area!);
    this.countrySrv.addCountry(this.country);
    this.router.navigate(['/liste-des-pays']);
  }

}
