import { Component } from '@angular/core';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { IngresarclienteComponent } from '../../ingresarcliente/ingresarcliente.component';
import { CommonModule } from '@angular/common';
import { LisClientesComponent } from '../../lis-clientes/lis-clientes.component';
import { ClienteService } from './../../cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CabeceraComponent, IngresarclienteComponent, FormsModule, CommonModule, LisClientesComponent],
  templateUrl: './home.component.html',
  providers: [ClienteService],
  styleUrls: ['./home.component.scss'], // Corregido: "styleUrl" a "styleUrls"
})
export class HomeComponent {
  terminoBusqueda: string = ''; // Término ingresado por el usuario
  clientesFiltrados: any[] = []; // Lista de clientes filtrados

  mostrarModal = false;

  constructor(private clienteService: ClienteService) {
    this.clientesFiltrados = this.clienteService.obtenerClientes(); // Inicializar con todos los clientes
  }

  // Este método filtra los clientes según el término de búsqueda
  onBuscar(): void {
    this.clientesFiltrados = this.clienteService.filtrarClientes(this.terminoBusqueda);
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
