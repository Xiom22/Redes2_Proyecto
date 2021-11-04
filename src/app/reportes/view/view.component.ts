import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  @ViewChild('carnetInput') carnet!:ElementRef<HTMLInputElement>;
  @ViewChild('nombreInput') nombre!:ElementRef<HTMLInputElement>;
  @ViewChild('cursoInput') curso!:ElementRef<HTMLInputElement>;
  @ViewChild('cuerpoInput') cuerpo!:ElementRef<HTMLTextAreaElement>;
  @ViewChild('fechaLabel') fecha!:ElementRef<HTMLInputElement>;
  @ViewChild('ingresadoLabel') ingreso!:ElementRef<HTMLInputElement>;
  @ViewChild('extraidoLabel') extraido!:ElementRef<HTMLInputElement>;

  constructor(
    private estudiante_service:EstudianteService
  ) { }

  ngOnInit(): void {
    this.id_reporte = this.estudiante_service.get_id() || '';

    this.estudiante_service.ver_reporte_id(this.id_reporte).subscribe(data => {
      let reporte:any = data;
      let reporte_data:any = data;
      reporte = reporte_data['data'];
      this.carnet.nativeElement.value = reporte['carnet'];
      this.nombre.nativeElement.value = reporte['nombre'];
      this.curso.nativeElement.value = reporte['curso'];
      this.cuerpo.nativeElement.value = reporte['cuerpo'];
      this.fecha.nativeElement.value = reporte['fecha'];
      this.ingreso.nativeElement.value = reporte['servidor'];
      this.extraido.nativeElement.value = reporte_data['servidor'];
    });
  }

  id_reporte:string = '';

}
