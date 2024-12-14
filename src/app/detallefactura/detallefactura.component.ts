import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-detallefactura',
  templateUrl: './detallefactura.component.html',
  styleUrls: ['./detallefactura.component.scss'],
  imports: [CommonModule,FormsModule],
  standalone:true
})
export class DetalleFacturaComponent implements OnInit {
 
  producto: any;  // El producto seleccionado
  
  productosSeleccionados: any[] = [];
  subtotal: number = 0;
  iva: number = 19;
  ivaCalculado: number = 0;
  total: number = 0;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productosSeleccionados = this.productoService.obtenerProductosSeleccionados();
  }

  // Método para agregar un producto a la lista de productos seleccionados
  agregarProductoSeleccionado(producto: any): void {
    const productoExistente = this.productosSeleccionados.find(p => p.codigo === producto.codigo);
    
    if (productoExistente) {
      // Si el producto ya existe, solo se actualiza la cantidad
      productoExistente.cantidad += 1;
      productoExistente.precioNeto = productoExistente.cantidad * productoExistente.precio;
  
      // Si la cantidad llega a 0, eliminar el producto de la lista
      if (productoExistente.cantidad === 0) {
        this.productosSeleccionados = this.productosSeleccionados.filter(p => p.codigo !== producto.codigo);
      }
    } else {
      // Si el producto no existe, se agrega con cantidad 1 y se calcula el subtotal
      this.productosSeleccionados.push({
        ...producto,
        cantidad: 1,
        precioNeto: producto.precio
      });
      this.calcularSubtotal()
    }


  if (productoExistente.cantidad === 0) {
    this.productosSeleccionados = this.productosSeleccionados.filter(p => p.codigo !== producto.codigo);
  }
}

  // Método para actualizar la cantidad de un producto y recalcular el subtotal
  actualizarCantidad(producto: any, cantidad: number): void {
    producto.cantidad = cantidad;
    producto.precioNeto = producto.precio * producto.cantidad;
    this.calcularSubtotal(); // Recalcula el subtotal cada vez que se actualiza la cantidad
  }


  eliminarProducto(codigo: string): void {
    // Elimina el producto solo de la lista local en este componente
    this.productosSeleccionados = this.productosSeleccionados.filter(p => p.codigo !== codigo);
    this.calcularSubtotal()
  }
 

  eliminarProductoSeleccionado(codigo: string): void {
    // Elimina el producto de la lista en el servicio
    this.productoService.eliminarProductoSeleccionado(codigo);
    // Actualiza la lista de productos seleccionados
    this.productosSeleccionados = this.productoService.obtenerProductosSeleccionados();
    this.calcularSubtotal();
  }
 
  calcularSubtotal(): void {
    this.subtotal = this.productosSeleccionados.reduce((acc, producto) => acc + producto.precioNeto, 0);
    this.calcularIva(); // Recalcula el valor del IVA cada vez que se actualiza el subtotal
    this.calcularTotal(); // Recalcula el total después de calcular el subtotal
  }

  // Método para calcular el IVA en valor monetario
  calcularIva(): void {
    this.ivaCalculado = (this.subtotal * this.iva) / 100; // Calcula automáticamente el 19% del subtotal
  }

  // Método para calcular el total (con IVA)
  calcularTotal(): void {
    this.total = this.subtotal + this.ivaCalculado; // Calcula el total sumando el IVA al subtotal
  }
  

}
