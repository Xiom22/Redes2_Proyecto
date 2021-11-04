import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styles: [
  ]
})
export class SendComponent implements OnInit {

  @ViewChild('carnetInput') carnetInput!:ElementRef<HTMLInputElement>;
  @ViewChild('nombreInput') nombreInput!:ElementRef<HTMLInputElement>;
  @ViewChild('cursoInput') cursoInput!:ElementRef<HTMLInputElement>;
  @ViewChild('cuerpoInput') cuerpoInput!:ElementRef<HTMLTextAreaElement>;

  constructor(
    private estudiante_service:EstudianteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  cargar_reporte(){
    let carnet = this.carnetInput.nativeElement.value;
    let nombre = this.nombreInput.nativeElement.value;
    let curso = this.cursoInput.nativeElement.value;
    let cuerpo = this.cuerpoInput.nativeElement.value;

    if (carnet != '' && nombre != '' && curso != '' && cuerpo != ''){
      this.estudiante_service.enviar_reporte( carnet, nombre, curso, cuerpo ).subscribe(data => data);

      this.toastr.success('Reporte enviado con exito', "Enviado")

      this.carnetInput.nativeElement.value = '';
      this.nombreInput.nativeElement.value = '';
      this.cursoInput.nativeElement.value = '';
      this.cuerpoInput.nativeElement.value = '';
    } else {
      this.toastr.warning('Debes llenar todos los campos', "Error")
    }
  }

}
