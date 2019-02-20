import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
<<<<<<< HEAD
=======
  status = [
    {'grade': 'Kindergarten', 'number': '93'},
    {'grade': 'Grade 1', 'number': '17'},
    {'grade': 'Grade 2', 'number': '18'},
    {'grade': 'Grade 3', 'number': '14'},
    {'grade': 'Grade 4', 'number': '10'},
    {'grade': 'Grade 5', 'number': '5'}
  ]
>>>>>>> dev

  constructor() { }

  ngOnInit() {
  }

}
