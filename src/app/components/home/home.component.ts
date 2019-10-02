import {Component, OnInit} from '@angular/core';
import {RouteEnum, RoutingService} from '../../service/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routingService.route = RouteEnum.HOME;
  }

}
