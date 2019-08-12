import { Injectable } from '@angular/core';
import { ListItem } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public data: ListItem;
  public isShow: boolean = false;

  constructor() { }

  createPopup(dataForPopup: ListItem) {
    this.data = dataForPopup;
  }

  show() {
    this.isShow = true;
  }

  hide() {
    this.isShow = false;
  }
}
