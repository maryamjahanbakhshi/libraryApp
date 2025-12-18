import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BookItem } from './bookspage';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  private data: BookItem[] = [
    { id: 1, titel: 'پدرپولدار', auther: 'کیوساکی', publisher: 'امینی', price: 200000 },
    { id: 2, titel: 'جرات داشته باش', auther: 'سهی', publisher: 'درسا', price: 250000 }
  ]
  list() {
    return [...this.data];
  }
  Add(item: BookItem) {
    this.data.push(item);
  }
  Edit(item: BookItem) {
    const ind = this.data.findIndex(b => b.id = item.id)
    if (ind != -1) {
      this.data[ind].titel = item.titel;
      this.data[ind].auther = item.auther;
      this.data[ind].publisher = item.publisher;
      this.data[ind].price = item.price;
    }
  }
  Remove(item: BookItem) {
    //this.data = this.data.filter(b => b.id != item.id)
    const ind = this.data.findIndex(b => b.id = item.id)
    if (ind != -1) {
      this.data=this.data.slice(ind,1)
    }
  }
}
