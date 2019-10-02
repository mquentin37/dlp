import {Component, OnInit} from '@angular/core';
import {RouteEnum, RoutingService} from '../../service/routing.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit() {
    this.routingService.route = RouteEnum.PORTFOLIO;
  }

}
