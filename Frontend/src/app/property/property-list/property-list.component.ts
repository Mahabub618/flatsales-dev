import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ReplaySubject, Subject, takeUntil} from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import {ActivatedRoute} from "@angular/router";
import {IHouse} from "../../models/IHouse";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy{
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  properties: Array<IHouse> = [];
  SellRent: number = 1; // 1 means Buy; 2 means Rent;
  constructor(private housingService: HousingService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getHouses();
  }
  getHouses() {
    // Below route snapshot is used based on
    // routerLink of "Buy" and "Sell" of nav-bar.component.html
    const buyOrRent = this.route.snapshot.url.toString();
    this.SellRent = (buyOrRent === 'buy' ? 2 : 1);
    this.housingService.getAllProperties(this.SellRent)
        .subscribe((response) => {
          if (response && response.length > 0) {
            this.properties = response;
            console.log(this.properties);
          } else {
            console.log('Empty response or invalid data');
          }
        }, (error) => {
          console.error('Error occurred:', error);
        });

  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
