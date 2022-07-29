import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pgina.services';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      }
    )
  }
}
