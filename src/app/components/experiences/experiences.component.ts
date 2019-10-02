import {Component, OnInit} from '@angular/core';
import {RouteEnum, RoutingService} from '../../service/routing.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  collapsed_Zenika = true;
  collapsed_Apside = true;
  collapsed_Nokia = true;

  zenikaCard = {
    srcImage: '',
    title: 'TLS / SSL Certificates Management - Spring API',
    description: '',
    tags: ['Security'],
    technologies: [`<img src="./assets/logos/spring.svg" height="20px"/>`]
  };

  constructor(private routingService: RoutingService) { }

  ngOnInit() {
    this.routingService.route = RouteEnum.EXPERIENCE;
  }

}
