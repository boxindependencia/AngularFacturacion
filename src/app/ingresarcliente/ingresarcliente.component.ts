// ingresarcliente.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-ingresarcliente',
  standalone: true,
  imports: [ReactiveFormsModule], // Importa los módulos necesarios
  templateUrl: './ingresarcliente.component.html',
  styleUrls: ['./ingresarcliente.component.scss'] // Corregido: "styleUrls" en lugar de "styleUrl"
})
export class IngresarclienteComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, public clienteService: ClienteService) {
    this.formulario = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formulario.valid) {
      // Llamamos al servicio para agregar el cliente
      const cliente = this.formulario.value;
      this.clienteService.agregarCliente(cliente);

      console.log('Cliente agregado con éxito:', cliente);
      // Aquí puedes limpiar el formulario si lo deseas
      this.formulario.reset();
    } else {
      console.log('El formulario no es válido.');
    }
  }
}
