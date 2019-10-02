import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 864) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 864) {
      this.mobile = true;
    }
  }

}
