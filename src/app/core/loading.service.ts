import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoad = new Subject<boolean>();
  public isLoad = this._isLoad.asObservable();

  constructor() { }

  changeLoadState(bool: boolean){
    this._isLoad.next(bool)
  }
}
