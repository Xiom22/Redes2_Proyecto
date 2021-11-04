import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ReportesModule } from './reportes/reportes.module';

import { EstudianteService } from './services/estudiante.service';
import { MarcarComponent } from './asistencia/marcar/marcar.component';
import { EventosComponent } from './asistencia/eventos/eventos.component';
import { ListAsistenciaComponent } from './asistencia/list-asistencia/list-asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcarComponent,
    EventosComponent,
    ListAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReportesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000
    })
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
