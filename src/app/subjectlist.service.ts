import { Injectable } from '@angular/core';


import {MenuItem} from 'primeng/api';
//import { SUBJECTS } from './mock-subjects';

import { Observable, of } from 'rxjs';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SubjectlistService {
  
  testdoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) { }

  //getSubjects(): Observable<MenuItem[]>{
  getSubjects(): Observable<any>{
    //return of(SUBJECTS);
    
    /*return of([{
      label: 'File',
      items: [
          {label: 'New', icon: 'fa fa-plus', command: (event) => {
              //event.originalEvent: Browser event
              //event.item: menuitem metadata
              //sendCurrent();
              alert(JSON.stringify(event.item))
          }}
      ]}])*/

    this.testdoc=this.db.doc('test/1');
    return this.testdoc.valueChanges();
  }
}
