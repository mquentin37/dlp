import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {AboutComponent} from './components/about/about.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', component: HomeComponent},
];

export const appModuleRouter: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
