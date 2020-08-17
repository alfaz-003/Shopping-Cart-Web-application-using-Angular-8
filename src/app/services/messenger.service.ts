import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject

  constructor() { }


  sendMsg(products){

    this.subject.next(products)          //triggering an event

  }


  getMsg(){
      return this.subject.asObservable()         //return of event
  }


}
