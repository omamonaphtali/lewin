import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Grade, grades } from './grades';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  getGrades(): Observable<Grade[]> {
    return of(grades);
  }

  constructor() { }
}
