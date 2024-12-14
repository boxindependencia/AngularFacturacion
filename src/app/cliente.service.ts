import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  actualizarBusqueda(terminoBusqueda: any) {
    throw new Error('Method not implemented.');
  }
  clientes: { rut: string, nombre: string, direccion: string }[] = [
    { rut: '76.123.456-7', nombre: 'Constructora Andes S.A.', direccion: 'Av. Apoquindo 3000, Santiago' },
    { rut: '77.234.567-8', nombre: 'Transportes del Sur Ltda.', direccion: 'Calle Errázuriz 120, Valparaíso' },
    { rut: '78.345.678-9', nombre: 'Agroexportadora La Serena SpA', direccion: 'Ruta 5 Norte Km 482, La Serena' },
    { rut: '79.456.789-0', nombre: 'Inversiones Patagónicas S.A.', direccion: 'Av. Alemania 500, Temuco' },
    { rut: '80.567.890-1', nombre: 'Tecnologías Antofagasta Ltda.', direccion: 'Calle Prat 200, Antofagasta' },
    { rut: '81.678.901-2', nombre: 'Distribuidora Los Lagos SpA', direccion: 'Av. Costanera 1500, Puerto Montt' }
  ];
  constructor() {}

  // Método para agregar un cliente
  agregarCliente(cliente: { rut: string, nombre: string, direccion: string }) {
    this.clientes.push(cliente);
    console.log('Cliente agregado:', cliente);
  }

  // Método para obtener todos los clientes (si es necesario)
  obtenerClientes() {
    return this.clientes;
  }

  // Método para eliminar un cliente
  eliminarCliente(rut: string): void {
    const index = this.clientes.findIndex(cliente => cliente.rut === rut);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }

  

  // Método para filtrar clientes
  filtrarClientes(termino: string) {
    return this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      cliente.rut.includes(termino) ||
      cliente.direccion.toLowerCase().includes(termino.toLowerCase())
    );
  }

  
}

