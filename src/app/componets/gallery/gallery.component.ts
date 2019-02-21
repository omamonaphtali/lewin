import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery = [
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin01.jpg'}),
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin02.jpg'}),
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin03.jpg'}),
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin04.jpg'}),
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin05.jpg'}),
    ({imgUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1549728287/lewin/lewin06.jpg'}),
  ];

  constructor() { }

  ngOnInit() {
  }

}
