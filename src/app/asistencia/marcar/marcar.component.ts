import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Asistencia } from 'src/app/models/Asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';


@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.component.html',
  styleUrls: ['./marcar.component.css']
})
export class MarcarComponent implements OnInit {

  @ViewChild('carnetInput') carnetInput!:ElementRef<HTMLInputElement>;
  @ViewChild('nombreInput') nombreInput!:ElementRef<HTMLInputElement>;
  @ViewChild('idInput') idInput!:ElementRef<HTMLInputElement>;
  @ViewChild('eventoInput') eventoInput!:ElementRef<HTMLTextAreaElement>;
  asistencia:Asistencia = {}

  constructor(
    private serv:AsistenciaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  marcarAsistencia(){
    this.asistencia.nombre = this.nombreInput.nativeElement.value
    this.asistencia.carnet = this.carnetInput.nativeElement.value
    this.asistencia.evento = this.eventoInput.nativeElement.value
    this.asistencia.id_evento = Number(this.idInput.nativeElement.value)
    this.serv.marcarAsistencia(this.asistencia).subscribe(
      (res:any) => {
        if(res.estado == 200){
          this.toastr.success(res.message)
          this.carnetInput.nativeElement.value = ''
          this.nombreInput.nativeElement.value = ''
          this.idInput.nativeElement.value = ''
          this.eventoInput.nativeElement.value = ''
          this.asistencia = {}
        }else  this.toastr.warning('Error al marcar asistencia')
      }
    )
  }

  seleccionarFoto(event: any):void{
    if (event.target.files && event.target.files[0]){
      let fotoSelect = <File>event.target.files[0]
      const reader = new FileReader()
      reader.onload = e =>{
        let foto = reader.result
        this.asistencia.foto = String(foto).split(',')[1]
      } 
      reader.readAsDataURL(fotoSelect)
    }
  }

}
