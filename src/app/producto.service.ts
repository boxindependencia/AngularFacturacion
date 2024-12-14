import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: { codigo: string, nombre: string, precio: number }[] = [
    { codigo: "P001", nombre: "Café", precio: 2500 },
    { codigo: "P002", nombre: "Té Verde", precio: 2000 },
    { codigo: "P003", nombre: "Pan Integral", precio: 1500 },
    { codigo: "P004", nombre: "Queso", precio: 4500 },
    { codigo: "P005", nombre: "Yogur Natural", precio: 1800 }
];
  codigoProducto: any;
  constructor() {}

  // Método para agregar un producto
  agregarProducto(producto: { codigo: string, nombre: string, precio: number }) {
    this.productos.push(producto);
    console.log('Producto agregado:', producto);
  }

  
  // Método para obtener todos los productos
  obtenerProductos() {
    return this.productos;
  }
  

  // Método para eliminar un producto
  eliminarProducto(codigo: string): void {
    const index = this.productos.findIndex(producto => producto.codigo === codigo);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  // Método para editar un producto
  editarProducto(producto: { id: string, nombre: string, precio: number }) {
    console.log('Editar producto:', producto);
    // Aquí puedes implementar la lógica para editar el producto, por ejemplo, abrir un formulario con los datos.
  }

  // Método para filtrar productos
  filtrarProductos(termino: string) {
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      producto.codigo.includes(termino) ||
      producto.precio.toString().includes(termino)
    );
  }
// Método para establecer el producto seleccionado
private productosSeleccionados: any[] = [];

agregarProductoSeleccionado(producto: any): void {
  if (!this.productosSeleccionados.find(p => p.codigo === producto.codigo)) {
    this.productosSeleccionados.push(producto);
  }
}
// Método para obtener el producto seleccionado
obtenerProductosSeleccionados(): any[] {
  return this.productosSeleccionados;
}

 // Método para eliminar un producto de la lista de seleccionados
 eliminarProductoSeleccionado(codigo: string) {
  this.productosSeleccionados = this.productosSeleccionados.filter(p => p.codigo !== codigo);
}

}
