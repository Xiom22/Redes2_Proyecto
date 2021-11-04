import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './reportes/home/home.component';
import { SendComponent } from './reportes/send/send.component';
import { ListComponent } from './reportes/list/list.component';
import { ViewComponent } from './reportes/view/view.component';
import { MarcarComponent } from './asistencia/marcar/marcar.component';
import { EventosComponent } from './asistencia/eventos/eventos.component';
import { ListAsistenciaComponent } from './asistencia/list-asistencia/list-asistencia.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'send',
    component: SendComponent,
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'marcar',
    component : MarcarComponent
  },
  {
    path: 'asistencia',
    component : ListAsistenciaComponent
  },
  {
    path: 'eventos',
    component : EventosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
