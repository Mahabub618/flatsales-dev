import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IHouse} from "../models/IHouse";
import {House} from "../models/House";
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient) { }
  getAllProperties() : Observable<Array<IHouse>> {
    return this.http.get<Array<IHouse>>(
      'data/properties.json'
    );
  }

  addProperty(property: House) {
    let newProp = [property];
    if(localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp') || '')];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  newPropID() {
    if(localStorage.getItem('PID')) {
      const lastID : number = +localStorage.getItem('PID')!;
      return lastID+1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
