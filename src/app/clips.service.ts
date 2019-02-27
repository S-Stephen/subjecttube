import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {

  mycollection: AngularFirestoreCollection<any>;
  //clips: Observable<any>

  constructor(private afs: AngularFirestore) { }

  getClips(subject: string): Observable<any>{
    //return of(SUBJECTS);
    console.log("subject: "+subject)
    this.mycollection=this.afs.collection('clips', ref => { return ref.where('subjects','array-contains',subject) });
    return this.mycollection.valueChanges();
  }
}
