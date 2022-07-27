import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesAPIService {

  url : string = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) {
    console.log("Service");
  }

  getAllCountries(){
    return this.http.get(this.url);
  }
}
