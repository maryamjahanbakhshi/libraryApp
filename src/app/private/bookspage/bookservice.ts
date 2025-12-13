import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoolItem } from './bookspage';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  private data: BoolItem[] = [
    { id: 1, titel: 'پدرپولدار', auther: 'کیوساکی', publisher: 'امینی', price: 200000 },
    { id: 2, titel: 'جرات داشته باش', auther: 'سهی', publisher: 'درسا', price: 250000 }
  ]
  list() {
    return [...this.data];
  }
  Add(item: BoolItem) {
    this.data.push(item)
  }
}
