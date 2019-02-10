import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {SuiteComponent} from './suite/suite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'suite',
    component: SuiteComponent
  },
  {
    path: 'lazya',
    loadChildren: './lazy-module-a/lazy-module-a.module#LazyModuleAModule'
  },
  {
    path: 'lazyb',
    loadChildren: './lazy-module-b/lazy-module-b.module#LazyModuleBModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
