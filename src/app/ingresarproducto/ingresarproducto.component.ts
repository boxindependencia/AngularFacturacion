import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-ingresarproducto',
  
  templateUrl: './ingresarproducto.component.html',
  styleUrls: ['./ingresarproducto.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule]
})
export class IngresarProductoComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, public ProductoService: ProductoService) {
    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formulario.valid) {
      // Llamamos al servicio para agregar el cliente
      const producto = this.formulario.value;
      this.ProductoService.agregarProducto(producto);

      console.log('Cliente agregado con éxito:', producto);
      // Aquí puedes limpiar el formulario si lo deseas
      this.formulario.reset();
    } else {
      console.log('El formulario no es válido.');
    }
  }
}