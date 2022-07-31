import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] = [];


  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   
  private cargarProductos(){
    this.http.get('https://learn-angular-a74eb-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) => {
      this.productos = resp;
      console.log(resp);
      this.cargando = false;
    });
  }
}
