import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
