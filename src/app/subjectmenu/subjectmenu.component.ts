import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
//import {SUBJECTS} from '../mock-subjects';
import {SubjectlistService} from '../subjectlist.service';

@Component({
  selector: 'app-subjectmenu',
  templateUrl: './subjectmenu.component.html',
  styleUrls: ['./subjectmenu.component.css']
})
export class SubjectmenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private subjectlistService: SubjectlistService) { }

  ngOnInit() {

    this.getSubjects();

  }

  getSubjects(): void {
    this.subjectlistService.getSubjects()
        .subscribe(items => this.items = items);
  }
}
