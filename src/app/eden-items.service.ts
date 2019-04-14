import { Injectable } from '@angular/core';

@Injectable()
export class EdenItemsService {
  edenItems = [
    {
      id: 1,
      name: 'One',
      area: 'Balcone',
      year: 2019,
      watchedOn: 1294545262,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Two',
      area: 'Balcone',
      year: 2019,
      watchedOn: 1294545262,
      isFavorite: false
    },
    {
      id: 3,
      name: 'One',
      area: 'Balcone',
      year: 2019,
      watchedOn: 1294545262,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Three',
      area: 'Giardino',
      year: 2019,
      watchedOn: 1294545262,
      isFavorite: false
    }
  ];

  constructor() { }

  get() {
    return this.edenItems;
  }

  add(edenItem) {
    this.edenItems.push(edenItem);
  }

  delete(edenItem) {
    // tslint:disable-next-line:prefer-const
    let index = this.edenItems.indexOf(edenItem);
    if (index >= 0) {
      this.edenItems.splice(index, 1);
    }
  }
}
