import { Component, OnInit } from '@angular/core';

import { Grade, grades } from './grades';
import { GradeService } from './grade.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  grades: Grade[];

  getGrades(): void {
    this.gradeService.getGrades().subscribe(grades => this.grades = grades);
  }

  constructor(private gradeService: GradeService) { }

  ngOnInit() {
    this.getGrades();
  }

}
