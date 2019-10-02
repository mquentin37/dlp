import {Component} from '@angular/core';
import {RoutingService} from './service/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private routeService: RoutingService) {

  }

  getNext() {
    return this.routeService.next;
  }

  getPrevious() {
    return this.routeService.previous;
  }
}
