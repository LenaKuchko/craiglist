import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AdvertDetailsService } from '../advert-details.service';
import { ADVERTISEMENTS } from '../mock-advertisements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css'],
  providers: [AdvertDetailsService]

})
export class AdvertDetailsComponent implements OnInit {
  advertisementSearchWord: string;
  advert: Advertisement;

  constructor(private route: ActivatedRoute, private location: Location, private advertDetailsService: AdvertDetailsService) {}

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.advertisementSearchWord = urlParameters['advert'];
    });
     this.advert = this.advertDetailsService.getBySearchWord(this.advertisementSearchWord);
  }
}
