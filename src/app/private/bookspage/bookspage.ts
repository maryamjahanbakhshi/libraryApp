import { Component, inject, OnInit } from '@angular/core';
import { Bookservice } from './bookservice';

@Component({
  selector: 'app-bookspage',
  imports: [],
  templateUrl: './bookspage.html',
  styleUrl: './bookspage.scss',
})
export class Bookspage implements OnInit {
  ngOnInit(): void {
    this.DataRefresh()
  }
  data: BoolItem[] = [];
  bookservice = inject(Bookservice)
  DataRefresh() {
    this.data = this.bookservice.list();
  }
  add() {
    this.DataRefresh();
  }
}
export interface BoolItem {
  id: number;
  titel: string;
  auther: string;
  publisher: string;
  price: number;
}
