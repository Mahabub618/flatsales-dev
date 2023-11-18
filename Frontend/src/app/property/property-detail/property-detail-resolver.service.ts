import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {House} from "../../models/House";
import {Observable} from "rxjs";
import {HousingService} from "../../services/housing.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<House> {

  constructor(private housingService: HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<House> | House {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId);
  }
}
