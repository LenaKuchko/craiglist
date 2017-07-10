import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AdvertisementService } from '../advertisement.service';
import { ADVERTISEMENTS } from '../mock-advertisements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AdvertisementService]
})
export class SearchComponent implements OnInit {

  advertisementSearchWord: string;
  advertsToShow: Advertisement [];

  constructor(private route: ActivatedRoute, private location: Location, private advertisementService: AdvertisementService) {}

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.advertisementSearchWord = urlParameters['search'];
    });
     this.advertsToShow = this.advertisementService.getBySearchWord(this.advertisementSearchWord);
  }

}
