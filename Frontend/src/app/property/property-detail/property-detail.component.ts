import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HousingService} from "../../services/housing.service";
import {House} from "../../models/House";
import {NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation} from "@kolkov/ngx-gallery";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{
  public propertyId = 1;
  property = new House();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService) {
  }
  ngOnInit() {
    this.initPropertyDetailResolve();
    this.initGallery();
    // this.route.params.subscribe((params) => {
    //   this.propertyId = +params['id'];
    //   console.log("propertyId", this.propertyId);
    //   this.housingService.getProperty(this.propertyId).subscribe((data : any) => {
    //     this.property = data;
    //   })
    // })
  }
  initPropertyDetailResolve() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe((data: any) => {
      this.property = data['detail'];
    });
  }
  initGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/prop-1.jpg',
        medium: 'assets/prop-1.jpg',
        big: 'assets/prop-1.jpg'
      },
      {
        small: 'assets/prop-2.jpg',
        medium: 'assets/prop-2.jpg',
        big: 'assets/prop-2.jpg'
      },
      {
        small: 'assets/prop-3.jpg',
        medium: 'assets/prop-3.jpg',
        big: 'assets/prop-3.jpg',
      },{
        small: 'assets/prop-4.jpg',
        medium: 'assets/prop-4.jpg',
        big: 'assets/prop-4.jpg'
      },
      {
        small: 'assets/prop-5.jpg',
        medium: 'assets/prop-5.jpg',
        big: 'assets/prop-5.jpg'
      }
    ];
  }
  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail/' + this.propertyId])
  }
}
