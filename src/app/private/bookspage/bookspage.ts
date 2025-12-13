import { Component, inject, OnInit } from '@angular/core';
import { Bookservice } from './bookservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookspage',
  imports: [FormsModule],
  templateUrl: './bookspage.html',
  styleUrl: './bookspage.scss',
})
export class Bookspage implements OnInit {

  Save() {
    this.bookservice.Add(this.ItemB);
    this.DataRefresh();
    this.state='list';

  }

  ngOnInit(): void {
    this.DataRefresh()
  }

  state: string = 'list';

  data: BoolItem[] = [];

  ItemB: BoolItem = {
    id: 0,
    titel: '',
    auther: '',
    publisher: '',
    price: 0
  };

  bookservice = inject(Bookservice);

  DataRefresh() {
    this.data = this.bookservice.list();
  }

  add() {
    this.state = "Add";
  }

  cancel() {
    this.state = 'list';
  }
}

export interface BoolItem {
  id: number;
  titel: string;
  auther: string;
  publisher: string;
  price: number;
}
