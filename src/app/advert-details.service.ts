import { Injectable } from '@angular/core';
import { ADVERTISEMENTS } from './mock-advertisements';
import { Advertisement } from './advertisement.model'

@Injectable()
export class AdvertDetailsService {

  constructor() { }

  getAdvertDetails()
  {
    return ADVERTISEMENTS;
  }

  getBySearchWord(searchWord: string){
    for (var i = 0; i <= ADVERTISEMENTS.length - 1; i++) {
      if (ADVERTISEMENTS[i].title == searchWord) {
        return ADVERTISEMENTS[i];
      }
    }
  }

}
