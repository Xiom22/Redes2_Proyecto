import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistencia } from '../models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  url = 'http://redes2-lb-824389543.us-east-1.elb.amazonaws.com/asistencia'

  constructor(
    private http: HttpClient
  ) {}

  marcarAsistencia(asistencia:Asistencia){
    return this.http.post(this.url + "/create", asistencia)
  }

  verAsistencia(id:number){
    return this.http.get(this.url + `/readEventos/${id}`)
  }

  verEventos(id:string){
    return this.http.get(this.url + `/readCarnet/${id}`)
  }

  verTodo(){
    return this.http.get(this.url)
  }
}
