import { Component, OnInit  } from '@angular/core';

// This component will utilise the firestore libraries
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { AngularFireDatabase } from '@angular/fire/database';

export interface Subject { id: number; }

import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';

// used to communicate across components
import {CurrentsubjectService} from './currentsubject.service';

import {ConfigService} from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'subjecttube';
  subjects: Observable<any[]>;
  categories: Observable<any[]>;

  private subjectDoc: AngularFirestoreDocument<Subject>;
  subject: Observable<Subject>;

  testCollection: AngularFirestoreCollection<any>;
  testdoc: AngularFirestoreDocument<any>;
  test: Observable<any>;

  test1doc: AngularFirestoreDocument<any>;
  test1: Observable<any>;

  items: MenuItem[];
  config: {};

  constructor(private db: AngularFirestore,
              private configService: ConfigService ) { // }, private db2: AngularFireDatabase) {
/*    this.subjects = db.collection('subjects').valueChanges();
    this.categories = db.collection('categories').valueChanges();

    this.subjectDoc = db.doc<Subject>('subjects/index');
    this.subject = this.subjectDoc.valueChanges();
    // const observable = this.db2.object('subjects');

    // this.testDoc = db.doc<any>('test/1')
    // this.test = this.testDoc.valueChanges()
    this.testdoc=db.doc('test/1');
    this.test = this.testdoc.valueChanges();

    this.test1doc = db.doc('subjects/index');
    this.test1 = this.test1doc.valueChanges();
*/

  }

  ngOnInit() {

  //  this.testdoc=this.db.doc('test/1');
  //  this.test = this.testdoc.valueChanges();

  //  this.updatetest();

      this.getConfig();
  }


  getConfig(): void {
    this.configService.getSubjects()
        .subscribe(config => this.config = config);
  }

  updatetest(){
    // this.subjectDoc.update(subject)
    let nodes = [
      {
        id: 1,
        name: 'root1a',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      }
    ];
    let nodes2 = [
      {label: "Astronomy and cosmology",
      items : [
          {label: "Theories"},
          {label: "Models",
           items:[
             {label:"Astronomical models and calculations",
              items: [
                {label:"Inverse square law"},
                {label:"Mass-luminosity relation"},
                {label:"Stars as black holes"},
                {label:"Stefan's and Wien's law used together"},
                {label:"Stefan's law"},
                {label:"Wien's law, including graphs"}
              ]},
            {label:"Doppler effect"},
            {label:"Hubble's law"},
            {label:"Orbits, Kepler's laws"}
              ]
          },
          {label: "Objects"},
          {label: "Theories"}
        ]
      },
      {label:"Atomic Physics",
       items: [
         {label:"Applications of nuclear physics"},
         {label:"Applications of quantum phenomena"},
         {label:"Nuclear physics"},
         {label:"Particle physics"},
         {label:"Quantum physics"}
       ]
      },
      {label:"Electricity"},
      {label:"Forces and motion"},
      {label:"Fields"},
      {label:"Physics skills"},
      {label:"Solids, liquids and gases"},
      {label:"Waves"},
    ];

    this.testdoc.set({nodes2})
  }

}
