import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Memberservice } from './memberservice';
import { last } from 'rxjs';

@Component({
  selector: 'app-memberspage',
  imports: [FormsModule],
  templateUrl: './memberspage.html',
  styleUrl: './memberspage.scss',
})

export class Memberspage implements OnInit {

  message: string = '';

  M_Save() {
    if (this.Mstat == 'mAdd') {
      this.memberservice.mAdd(this.ItemM);
      // this.ItemM = { id: 0, fName: '', lName: '', phone: '', email: '', }
    }
    else if (this.Mstat == 'mEdit') {
      this.memberservice.mEdit(this.ItemM)
    }
    else if (this.Mstat == 'mRemove') {
      this.memberservice.mRemove(this.ItemM)
    }
    this.M_DataRefresh();
    this.Mstat = 'mList';
  }

 /* checkNull() {
    if (this.ItemM.fName == '' || this.ItemM.lName == '' || this.ItemM.id) {
      this.message = 'لطفا فیلد نام یا نام خانوادگی یا شناسه خود را وارد کنید ';
    }
    else {
      this.M_Save();
    }
  }*/

  ngOnInit(): void {
    this.M_DataRefresh()
  }

  Mstat: string = 'mList';

  Mdata: memberitem[] = [];

  ItemM: memberitem = {
    id: 0,
    fName: '',
    lName: '',
    phone: '',
    email: '',
  }

  memberservice = inject(Memberservice);
  M_DataRefresh() {
    this.Mdata = this.memberservice.mList();
  }

  M_add() {
    this.Mstat = "mAdd";
    this.ItemM = { id: 0, fName: '', lName: '', phone: '', email: '', }
  }

  M_Edit(member: memberitem) {
    this.ItemM = { ...member };
    this.Mstat = 'mEdit';
  }

  M_Remove(member: memberitem) {
    this.ItemM = { ...member };
    this.Mstat = 'mRemove';
  }

  M_cancel() {
    this.Mstat = 'mList';
  }

}

export interface memberitem {
  id: number;
  fName: string;
  lName: string;
  phone?: string;
  email?: string;
}

