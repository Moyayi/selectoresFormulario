import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {  HttpClient } from '@angular/common/http'
import { InterfaceCountry } from '../interfaces/regionCountry.interface';
@Injectable({
  providedIn: 'root'
})
export class ServicesCountry {

  private _baseUrl = "https://restcountries.com/v3.1"
  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  get regiones () : string [] {
    return [...this._regiones]
  }
  constructor(private _http : HttpClient) { }

  getPiasesPorRegion(region : string) : Observable<InterfaceCountry[]>{
    const url = `${this._baseUrl}/region/${region}?fields=name&fields=cca3&fields=borders`
    return this._http.get<InterfaceCountry[]>( url )
      .pipe( 
        tap( response => console.log(response))
      )
  }
}
