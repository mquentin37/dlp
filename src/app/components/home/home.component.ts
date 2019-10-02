import {Component, HostListener, OnInit} from '@angular/core';
import {RouteEnum, RoutingService} from '../../service/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = event.target.innerWidth <= 864;
  }

    constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routingService.route = RouteEnum.HOME;
    if (window.screen.width <= 864) {
      this.mobile = true;
    }
  }

}
