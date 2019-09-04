import { Injectable } from '@angular/core';
import { ListItem } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public courseId: number;
  public data: ListItem;
  public isShow: boolean = false;

  constructor() { }

  createPopup(id: number, dataForPopup: ListItem) {
    this.data = dataForPopup;
    this.courseId = id;
  }

  show() {
    this.isShow = true;
  }

  hide() {
    this.isShow = false;
  }
}
