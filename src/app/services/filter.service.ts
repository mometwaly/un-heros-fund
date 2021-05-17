import { Hero } from './../models/hero.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HEROS } from '../heros';
@Injectable({
  providedIn: 'root',
})
export class FilterService {
  herosData = HEROS;
  constructor(private http: HttpClient) {}
  getCountries() {
    return this.http.get<any>(
      'https://cors-anywhere.herokuapp.com/countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1'
    );
  }
  getHeros(){
    return this.herosData;
  }
  filterHeros(filter : Hero) {
    let finalFilter:Hero[]=[]
    let filterDataCopy:Hero[] = [...this.herosData]
    for(let [key, val] of Object.entries(filter)){
      if(val){
        finalFilter=filterDataCopy.filter((hero : any)=> hero[key]=== val)
        filterDataCopy=finalFilter
      }
    }
    return finalFilter;
  }
}
