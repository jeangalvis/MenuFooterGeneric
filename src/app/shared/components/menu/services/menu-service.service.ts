import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  private _menuOpen = new BehaviorSubject<boolean>(false);
  menuOpen$ = this._menuOpen.asObservable();

  toggle() {
    this._menuOpen.next(!this._menuOpen.value);
  }
}
