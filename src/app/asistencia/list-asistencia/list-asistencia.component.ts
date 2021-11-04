import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Asistencia } from 'src/app/models/Asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-list-asistencia',
  templateUrl: './list-asistencia.component.html',
  styleUrls: ['./list-asistencia.component.css']
})
export class ListAsistenciaComponent implements OnInit {
  @ViewChild('eventoBuscar') eventoBuscar!:ElementRef<HTMLInputElement>

  eventos:Asistencia[] = []

  constructor(
    private serv:AsistenciaService
  ) { }

  ngOnInit(): void {
    this.verTodo()
  }

  buscar(){
    const id_evento = Number(this.eventoBuscar.nativeElement.value)
    if (id_evento) {
      this.serv.verAsistencia(id_evento).subscribe(
        (res:any) => {
          if(res.estado){
            if(res.estado == 200) this.eventos = res.data
          }
        }
      )
    }else{
      this.verTodo()
    }
  }

  verTodo(){
    this.serv.verTodo().subscribe(
      (res:any) => {
        this.eventos = res.data
      }
    )
  }

}
