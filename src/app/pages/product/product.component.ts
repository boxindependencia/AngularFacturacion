import { Component } from '@angular/core';
import { ProductoService } from '../../producto.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LisProductosComponent } from '../../lisproductos/lisproductos.component';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { IngresarProductoComponent } from '../../ingresarproducto/ingresarproducto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CabeceraComponent, 
    RouterLink, 
    ReactiveFormsModule, 
    CommonModule,
    IngresarProductoComponent,
    FormsModule, 
    LisProductosComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  mostrarModal: boolean | undefined;
  abrirModal(): void {
    this.mostrarModal = true;
  }

  // Cerrar el modal
  cerrarModal(): void {
    this.mostrarModal = false;
  }

  // Agregar un producto a la factura
  agregarProducto(producto: any): void {
    this.productos.push(producto); // Agregar producto a la lista de productos
    this.productosFiltrados = [...this.productos]; // Actualizar los productos filtrados
    this.cerrarModal(); // Cerrar el modal después de agregar el producto
  }



  productosFiltrados: any[] = []; // Lista de productos filtrados
  productos: any[] = []; // Lista de productos agregados

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private productoService: ProductoService
    ) {}
  
  }