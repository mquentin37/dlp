import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() srcImage: string;
  @Input() title: string;
  @Input() description: string;
  @Input() tags: string[];
  @Input() technologies: string[];
  @Output() bodyPostClick = new EventEmitter();

  headerPostHeight = 40;
  bodyPostHeight = 60;
  pBodyPostHeight = 60;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.bodyPostClick.emit();
  }

  headerHover() {
    this.headerPostHeight = 50;
    this.bodyPostHeight = 50;
    this.pBodyPostHeight = 49;
  }

  headerLeave() {
    this.headerPostHeight = 40;
    this.bodyPostHeight = 60;
    this.pBodyPostHeight = 60;
  }

}
