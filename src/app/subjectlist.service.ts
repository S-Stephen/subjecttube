import { Injectable } from '@angular/core';


import {MenuItem} from 'primeng/api';
import { SUBJECTS } from './mock-subjects';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectlistService {

  constructor() { }

  getSubjects(): Observable<MenuItem[]>{
    return of(SUBJECTS);
  }
}
