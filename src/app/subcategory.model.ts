import { Advertisement } from './advertisement.model';
export class Subcategory {
  array: Advertisement [] = [];
  constructor (public title: string, public tag: string, public search: string) { }
}
