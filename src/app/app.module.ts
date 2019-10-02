import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HomeComponent} from './components/home/home.component';
import {appModuleRouter} from './app.routes';
import {AboutComponent} from './components/about/about.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import {RoutingService} from './service/routing.service';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    LoadingComponent,
    ExperiencesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    appModuleRouter,
    AngularFontAwesomeModule
  ],
  providers: [RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
