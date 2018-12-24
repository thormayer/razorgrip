import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'city/:id',
    component: CityComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
