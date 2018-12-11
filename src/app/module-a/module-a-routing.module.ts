import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentAComponent} from './component-a/component-a.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'a',
        component: ComponentAComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
