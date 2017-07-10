import { Injectable } from '@angular/core';
import { Advertisement } from './advertisement.model';
import { ADVERTISEMENTS } from './mock-advertisements';

@Injectable()
export class AdvertisementService {
  adverts: Advertisement[] = [];

  constructor() { }

  getAdvertisement() {
    return ADVERTISEMENTS;
  }

  getBySearchWord(searchWord: string){
    for (var i = 0; i <= ADVERTISEMENTS.length - 1; i++) {
      if (ADVERTISEMENTS[i].title.toLowerCase().includes(searchWord)) {
        this.adverts.push(ADVERTISEMENTS[i]);
      }
    }
    return this.adverts;
  }

}
