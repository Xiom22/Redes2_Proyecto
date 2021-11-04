import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Asistencia } from 'src/app/models/Asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  @ViewChild('carnetBuscar') carnetBuscar!:ElementRef<HTMLInputElement>

  eventos:Asistencia[] = []

  constructor(
    private serv:AsistenciaService
  ) { }

  ngOnInit(): void {
    this.verTodo()
  }

  buscar(){
    const carnet = this.carnetBuscar.nativeElement.value
    console.log("entre a buscar")
    if (carnet) {
      this.serv.verEventos(carnet).subscribe(
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
