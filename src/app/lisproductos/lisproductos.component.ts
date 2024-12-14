// lisproductos.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lisproductos',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './lisproductos.component.html',
  styleUrls: ['./lisproductos.component.scss'],
})
export class LisProductosComponent implements OnInit {
  @Input() productos: { codigo: string; nombre: string; precio: number }[] = []; // Lista de productos
  @Output() productoSeleccionado: EventEmitter<any> = new EventEmitter(); // Emisor de eventos para pasar el producto seleccionado
  productosFiltrados: { codigo: string; nombre: string; precio: number }[] = []; 
  terminoBusqueda: string = ''; 

  

  constructor(private productoService: ProductoService) { }
 

  ngOnInit(): void {
    // Obtener los productos del servicio al cargar el componente
    this.productos = this.productoService.obtenerProductos();
    this.productosFiltrados = this.productos; 
  }

  seleccionarProducto(producto: { codigo: string; nombre: string; precio: number }) {
    this.productoService.agregarProductoSeleccionado(producto);  // Agrega el producto al servicio
  }

  eliminarProducto(producto: { codigo: string; nombre: string; precio: number }): void {
    this.productoService.eliminarProducto(producto.codigo);
    this.productos = this.productoService.obtenerProductos();
    this.filtrarProductos();
  }

  editarProducto(producto: { id: string; nombre: string; precio: number }): void {
    console.log('Editar producto:', producto);
  }

 

  filtrarProductos(): void {
    this.productosFiltrados = this.productoService.filtrarProductos(this.terminoBusqueda);
  }
}
