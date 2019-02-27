import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
//import {SUBJECTS} from '../mock-subjects';
import {SubjectlistService} from '../subjectlist.service';

// used to communicate across components
import {CurrentsubjectService} from '../currentsubject.service';

@Component({
  selector: 'app-subjectmenu',
  templateUrl: './subjectmenu.component.html',
  styleUrls: ['./subjectmenu.component.css']
})
export class SubjectmenuComponent implements OnInit {

  items: MenuItem[];
  //items: any[]
  data: string[] = [];

  constructor(private subjectlistService: SubjectlistService,
              private _currentsubjectService: CurrentsubjectService) { }

  ngOnInit() {

    this.getSubjects();

  }

  sendCurrent(): void {
    // send the current subject via the observable subject
    this._currentsubjectService.sendMessage("a subject has been selected")
  }

  getSubjects(): void {
    this.subjectlistService.getSubjects()
        .subscribe(items => this.items = items.nodes2); 
  }
}
