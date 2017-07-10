import { Subcategory } from './subcategory.model';
import { Advertisement } from './advertisement.model'

export const SUBCATEGORIES: Subcategory[] = [
  new Subcategory('Activities', 'Community', 'act'),
  new Subcategory('Artists', 'Community', 'art'),
  new Subcategory('Office', 'Housing', 'off'),
  new Subcategory('Parking', 'Housing', 'par'),
  new Subcategory('Accounting', 'Jobs', 'acc'),
  new Subcategory('Business', 'Jobs', 'bus'),
  new Subcategory('Free', 'For Sale', 'fre'),
  new Subcategory('Bikes', 'For Sale', 'bik'),
  new Subcategory('Help', 'Forum', 'hel'),
  new Subcategory('Apple', 'Forum', 'app'),
  new Subcategory('Automotive', 'Services', 'aut'),
  new Subcategory('Pet', 'Services', 'pet')
];
