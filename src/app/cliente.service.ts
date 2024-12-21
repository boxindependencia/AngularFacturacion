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
    { rut: '81.678.901-2', nombre: 'Distribuidora Los Lagos SpA', direccion: 'Av. Costanera 1500, Puerto Montt' },
      { rut: '82.789.012-3', nombre: 'Hotelera Viña del Mar S.A.', direccion: 'Av. Perú 250, Viña del Mar' },
      { rut: '83.890.123-4', nombre: 'Clínica del Norte Ltda.', direccion: 'Calle Balmaceda 400, Arica' },
      { rut: '84.901.234-5', nombre: 'Ferretería Central SpA', direccion: 'Av. Independencia 100, Rancagua' },
      { rut: '85.012.345-6', nombre: 'Constructora Valdivia S.A.', direccion: 'Ruta 5 Sur Km 800, Valdivia' },
      { rut: '86.123.456-7', nombre: 'Lácteos del Sur Ltda.', direccion: 'Av. O’Higgins 300, Osorno' },
      { rut: '87.234.567-8', nombre: 'Importadora Magallanes SpA', direccion: 'Calle Colon 500, Punta Arenas' },
      { rut: '88.345.678-9', nombre: 'Comercial Atacama S.A.', direccion: 'Av. Copayapu 1000, Copiapó' },
      { rut: '89.456.789-0', nombre: 'Restaurante El Norte Ltda.', direccion: 'Calle Brasil 800, Iquique' },
      { rut: '90.567.890-1', nombre: 'Automotriz Sur SpA', direccion: 'Av. Pedro Aguirre Cerda 1200, Concepción' },
      { rut: '91.678.901-2', nombre: 'Papelería Express S.A.', direccion: 'Av. Los Carrera 150, Chillán' }
   
      
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

