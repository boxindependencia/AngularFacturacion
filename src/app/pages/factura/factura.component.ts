import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { LisProductosComponent } from "../../lisproductos/lisproductos.component";
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../producto.service';
import { ChangeDetectorRef } from '@angular/core';
import { DetalleFacturaComponent } from '../../detallefactura/detallefactura.component';


@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [
    CabeceraComponent,
   
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DetalleFacturaComponent,
    LisProductosComponent,

],
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  terminoBusqueda: string = '';
  mostrarContainer: boolean | undefined;
  showDetalleFactura: boolean = true;
  productosSeleccionados: any;

  toggleDetalleFactura() {
    this.showDetalleFactura = !this.showDetalleFactura;
  }
  
  Buscar() {
    this.productosFiltrados = this.productoService.filtrarProductos(this.terminoBusqueda
    );
    // Opcional: Forzar detección de cambios
    this.cdr.detectChanges();
  }
  ocultarContainer() {
    this.mostrarContainer = false;
  }

  
  

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  mostrarModal: boolean = false;
  cliente: any = {};
  facturaForm!: FormGroup; // Declarar el formulario
  folio: number = 1000; // Inicializamos un número de folio base
  productosFiltrados: any[] = []; // Lista de productos filtrados
  productos: any[] = []; // Lista de productos agregados
  formulario: any;

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private productoService: ProductoService,
    public cdr: ChangeDetectorRef
  ) {

    this.productosFiltrados = this.productoService.obtenerProductos();

   }
  

  
   
  
  ngOnInit(): void {
    // Obtener parámetros de la URL
    this.route.params.subscribe(params => {
      this.cliente.rut = params['rut'];
    });

    // Obtener los queryParams
    this.route.queryParams.subscribe(queryParams => {
      this.cliente.nombre = queryParams['nombre'];
      this.cliente.direccion = queryParams['direccion'];
    });

    // Inicializar formulario
    this.facturaForm = this.fb.group({
      fecha: ['', Validators.required], // Campo obligatorio
      folio: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Obligatorio y numérico
      giro: ['', Validators.required] // Campo obligatorio
    });

    // Asignamos el folio inicial al campo folio
    this.facturaForm.controls['folio'].setValue(this.folio);

    // Obtener productos del servicio
    
  }

  // Guardar la factura
  guardarFactura(): void {
    if (this.facturaForm.valid) {
      // Incrementamos el número de folio antes de guardar
      this.folio++; // Incrementamos el número de folio automáticamente
      this.facturaForm.controls['folio'].setValue(this.folio); // Actualizamos el formulario con el nuevo folio

      const facturaData = {
        ...this.cliente, // Combina los datos del cliente
        ...this.facturaForm.value, // Con los datos del formulario
        productos: this.productos // Incluye los productos en la factura
      };
      console.log('Factura guardada:', facturaData);
    }
  }

  // Abrir el modal para agregar un producto
  abrirModal(): void {
    this.mostrarModal = true;
  }
  agregarProducto(producto: any): void {
    // Si el producto no está en la lista por código (si es un producto único por código)
    if (!this.productosSeleccionados.find((p: { codigo: any; }) => p.codigo === producto.codigo)) {
      this.productosSeleccionados.push(producto);
    }
  }
  
  cerrarModal(): void {
    this.mostrarModal = false;
  }


}