export class Advertisement {
  // date = new Date();
  constructor (
              public title: string,
              public description: string,
              public author: string,
              public price: number,
              public itemToSell: string,
              public date = new Date()
          ) { }
}
