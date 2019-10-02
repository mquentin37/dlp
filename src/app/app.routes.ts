import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {AboutComponent} from './components/about/about.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'loading', pathMatch: 'full'},
  {path: 'loading', component: LoadingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experience', component: ExperiencesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', component: LoadingComponent},
];

export const appModuleRouter: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
