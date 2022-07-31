import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pgina.services';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: [] = [];

  constructor(private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);
      }
    )
  }
  private cargarEquipo(){
    //leer el archivo JSON
    this.http.get('https://learn-angular-a74eb-default-rtdb.firebaseio.com/equipo.json').subscribe(
      (resp: any) => {
        //this.cargada = true;
        this.equipo = resp;
        console.log('EQUIPO: '+resp);
      }
    )
  }
}
