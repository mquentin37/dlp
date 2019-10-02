import { Injectable } from '@angular/core';

export enum RouteEnum {
  HOME = '/home',
  ABOUT = '/about',
  EXPERIENCE = '/experience',
  PORTFOLIO = '/portfolio'
}

@Injectable()
export class RoutingService {

  constructor() { }

  private _route = RouteEnum.HOME;

  get route(): RouteEnum {
    return this._route;
  }

  set route(value: RouteEnum) {
    this._route = value;
  }

  get next(): RouteEnum {
    switch (this._route) {
      case RouteEnum.HOME:
        return RouteEnum.ABOUT;
      case RouteEnum.ABOUT:
        return RouteEnum.EXPERIENCE;
      case RouteEnum.EXPERIENCE:
        return RouteEnum.PORTFOLIO;
      case RouteEnum.PORTFOLIO:
      default:
        return RouteEnum.HOME;
    }
  }

  get previous(): RouteEnum {
    switch (this._route) {
      case RouteEnum.HOME:
        return RouteEnum.PORTFOLIO;
      case RouteEnum.ABOUT:
      default:
        return RouteEnum.HOME;
      case RouteEnum.EXPERIENCE:
        return RouteEnum.ABOUT;
      case RouteEnum.PORTFOLIO:
        return RouteEnum.EXPERIENCE;
    }
  }

}
