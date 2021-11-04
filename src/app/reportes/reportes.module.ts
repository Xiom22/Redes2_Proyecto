import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send/send.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    SendComponent,
    HomeComponent,
    ListComponent,
    ViewComponent
  ],
  exports: [
    SendComponent,
    HomeComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportesModule { }
