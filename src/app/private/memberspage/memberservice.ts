import { Expansion } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { memberitem } from './memberspage';

@Injectable({
  providedIn: 'root',
})
export class Memberservice {
  private mData: memberitem[] = [
    { id: 1, fName: 'مریم ', lName: 'جهان بخشی', phone: '09034783924', email: 'MaryamJahanBakhshi@gmail.com' },
    { id: 2, fName: 'زهرا ', lName: 'نادری', phone: '09054783824', email: '' }
  ]

  mList() {
    return [...this.mData];
  }

  mAdd(mitem: memberitem) {
    this.mData.push(mitem);
  }

  mEdit(mitem: memberitem) {
    const index = this.mData.findIndex(m => m.id = mitem.id)
    if (index != -1) {
      this.mData[index].fName = mitem.fName;
      this.mData[index].lName = mitem.lName;
      this.mData[index].phone = mitem.phone;
      this.mData[index].email = mitem.email;
    }

  }

  mRemove(mitem: memberitem) {
    this.mData = this.mData.filter(m => m.id != mitem.id);
  }
}

