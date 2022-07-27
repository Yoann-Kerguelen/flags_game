import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesAPIService } from '../countries-api.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  countries: Country[] = [];
  score : number = 0;

  countryCapitalForm = this.fb.group({
    capitol: ["", [Validators.minLength(1), Validators.required]],
  });

  constructor(private countriesApiService: CountriesAPIService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.countriesApiService.getAllCountries().subscribe({
      next: (result: any) => {
        for (let i = 0; i < 10; i++) {
          let random = Math.floor(Math.random() * (250 - 0 + 1)) + 0;
          this.countries.push(new Country(result[random].name.official,
            result[random].capital[0], result[random].population, "", result[random].flags.png, result[random].region));
        }
       // console.log(this.countries);
       //console.log(result[10].flags.png);
      }
    })
  }

  validateForm(){

  }
}
