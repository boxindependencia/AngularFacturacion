import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lis-clientes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './lis-clientes.component.html',
  styleUrls: ['./lis-clientes.component.scss'], // Corregido "styleUrl" a "styleUrls"
})
export class LisClientesComponent implements OnInit {
  @Input() clientes: { rut: string; nombre: string; direccion: string }[] = []; // Lista completa de clientes
  clientesFiltrados: { rut: string; nombre: string; direccion: string }[] = []; // Lista filtrada de clientes
  terminoBusqueda: string = ''; // Almacena el término de búsqueda

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Obtener los clientes del servicio al cargar el componente
    this.clientes = this.clienteService.obtenerClientes();
    this.clientesFiltrados = this.clientes; // Inicialmente, la lista filtrada es igual a la lista completa
  }

  eliminarCliente(cliente: { rut: string; nombre: string; direccion: string }): void {
    this.clienteService.eliminarCliente(cliente.rut); // Pasa solo el RUT
    this.clientes = this.clienteService.obtenerClientes(); // Actualiza la lista después de eliminar
    this.filtrarClientes(); // Filtra nuevamente después de eliminar
  }

  editarCliente(cliente: { rut: string; nombre: string; direccion: string }): void {
    console.log('Editar cliente:', cliente);
    // Implementar la lógica para editar el cliente
  }

  filtrarClientes(): void {
    // Filtra la lista de clientes según el término de búsqueda
    this.clientesFiltrados = this.clienteService.filtrarClientes(this.terminoBusqueda);
  }
}
