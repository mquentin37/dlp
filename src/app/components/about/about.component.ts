import {Component, OnInit} from '@angular/core';
import {RouteEnum, RoutingService} from '../../service/routing.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit() {
    this.routingService.route = RouteEnum.ABOUT;
  }

}
