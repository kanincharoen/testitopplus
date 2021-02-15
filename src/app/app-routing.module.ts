import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
    {
        path: 'test',
        component:FirstComponentComponent
    },
    {
      path: '',
      component:FirstComponentComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
