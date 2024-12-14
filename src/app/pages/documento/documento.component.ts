import { Component } from '@angular/core';
import { CabeceraComponent } from '../../cabecera/cabecera.component';

@Component({
  selector: 'app-documento',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './documento.component.html',
  styleUrl: './documento.component.scss'
})
export class DocumentoComponent {

}
