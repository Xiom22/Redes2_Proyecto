import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) {}

  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  prefijo_url = 'http://redes2-lb-765412001.us-east-1.elb.amazonaws.com/reportes';

  enviar_reporte(
    carnet: string,
    nombre: string,
    curso: string,
    cuerpo: string
  ){
    const url = this.prefijo_url + "/send";

    return this.http.post(url, {
      "carnet": carnet,
      "nombre": nombre,
      "curso": curso,
      "cuerpo": cuerpo
    }, {headers: this.headers}
    ).pipe(map(data => data ));
  }

  ver_reportes(){
    const url = this.prefijo_url + "/all";

    return this.http.get(url, {headers: this.headers});
  }

  ver_reporte_id(
    id: string
  ){
    const url = this.prefijo_url + "/rep" + id;

    return this.http.get(url, {headers: this.headers});
  }

  buscar_reportes(
    carnet: string
  ){
    const url = this.prefijo_url + "/like" + carnet;

    return this.http.get(url, {headers: this.headers});
  }

  cargar_id(
    id:string
  ){
    localStorage.setItem('idReporte', id);
    this.router.navigate(['/view']);
  }

  get_id(){
    return localStorage.getItem('idReporte');
  }
}
