import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentsubjectService {
  private subject = new Subject<any>(); // Subject is an rxjs subject here!!

  sendMessage(current: string){
    this.subject.next({ text: current })
  }

  clearMessage(){
    this.subject.next();
  }

  
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
