import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentBComponent} from './component-b/component-b.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'b',
        component: ComponentBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
