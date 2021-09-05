import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  text: string;
  imagePath: string;

  constructor() {}

  ngOnInit(): void {
    this.text = 'Opans! Tudo tranquilo? =D';
    this.imagePath = 'assets/images/cat-pls.gif';
  }
}
