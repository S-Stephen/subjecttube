import { Injectable } from '@angular/core';

// ATM - provide configuration via firebase storage
// consider replacing with a config file, as this content should be static!
// mock-subjects

import { Observable, of } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configdoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) { }

  getSubjects(): Observable<any>{
    // we could replce with return of() a set of values loaded from a file
    // return of(CONFIG);
    // return of([{global:{title:'some title',message:'some message'}}])
    this.configdoc=this.db.doc('config/global');
    return this.configdoc.valueChanges();
  }
}
