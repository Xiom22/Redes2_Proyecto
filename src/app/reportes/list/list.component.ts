import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  @ViewChild('carnetBuscar') carnetBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private estudiante_service:EstudianteService
  ) { }

  ngOnInit(): void {
    this.estudiante_service.ver_reportes().subscribe(data => {this.lista_reportes = data});
  }

  lista_reportes:any = [];

  buscar(){
    const carnet = this.carnetBuscar.nativeElement.value;
    if(carnet == ''){
      this.estudiante_service.ver_reportes().subscribe(data => {this.lista_reportes = data});
    }else{
      this.estudiante_service.buscar_reportes(carnet).subscribe(data => {this.lista_reportes = data});
    }
    this.carnetBuscar.nativeElement.value = '';
  }

  guardar_id(id:string){
    this.estudiante_service.cargar_id(id);
  }

}
