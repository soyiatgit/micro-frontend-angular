import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibSharedUiService {

  constructor() { }

  comm = new BehaviorSubject('');
  comm$ = this.comm.asObservable();

  carComm = new BehaviorSubject('');
  carComm$ = this.carComm.asObservable();

  loginUser(username: string) {
    console.log('LibSharedUiService', username);
    this.comm.next(username);
  }

  setSelectedCharacter(char: string) {
    this.carComm.next(char);
  }

  getCurrentUser() {
    return this.comm.getValue();
  }

  getSelectedCharacter() {
    return this.carComm.getValue();
  }

  
}
