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
    if (this.state == 'Add') {
      this.bookservice.Add(this.ItemB);
      //this.ItemB={id:0,titel:'',auther:'',publisher:'',price:0} 
    }
     else if (this.state == 'Remove') {
      this.bookservice.Remove(this.ItemB);
    }
    else if (this.state == 'Edit') {
      this.bookservice.Edit(this.ItemB);
    }
    this.DataRefresh();
    this.state = 'list';
  }

  ngOnInit(): void {
    this.DataRefresh()
  }

  state: string = 'list';

  data: BookItem[] = [];

  ItemB: BookItem = {
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
    this.ItemB = { id: 0, titel: '', auther: '', publisher: '', price: 0 };//creat new object .its true
  }

  editB(book: BookItem) {
    this.ItemB = { ...book };
    this.state = 'Edit';
  }

  cancel() {
    this.state = 'list';
  }

  removeB(book:BookItem){
    this.ItemB={...book};
    this.state='Remove';
  }
}

export interface BookItem {
  id: number;
  titel: string;
  auther: string;
  publisher: string;
  price: number;
}
