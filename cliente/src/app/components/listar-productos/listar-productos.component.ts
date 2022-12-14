import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(private productoService: ProductoService)  { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(){
    this.productoService.getProductos().subscribe( data =>{
      this.listProductos = data;
    });
  }

  eliminarProducto(id: any){
    this.productoService.eliminarProducto(id).subscribe( data =>{
      alert('Producto eliminado');
      this.obtenerProductos();
    });
  }

}
