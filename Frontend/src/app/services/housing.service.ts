import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IHouse} from "../models/IHouse";
import {House} from "../models/House";
@Injectable({
    providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient) { }
  getProperty(id: number) : Observable<IHouse | undefined > {
    return this.getAllProperties().pipe(
        map((propertiesArray : IHouse[]) => {
          return propertiesArray.find((val : IHouse) => val.Id === id);
        })
    )
  }
  getAllProperties(SellRent?: number) : Observable<IHouse[]> {
    return this.http.get('data/properties.json').pipe(
        map((data: any) : any => {
          const propertiesArray: Array<IHouse> = [];
          const localProperties = JSON.parse(localStorage.getItem('newProp') || '');
          propertiesArray.push(...data);
          propertiesArray.push(...localProperties);
          if(SellRent) {
            return propertiesArray.filter((val) => val.SellRent === SellRent);
          }
          else {
            return propertiesArray;
          }
        })
    );
    // return this.http.get<Array<IHouse>>(
    //   'data/properties.json'
    // );
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
