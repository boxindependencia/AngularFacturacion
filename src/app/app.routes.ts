import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentoComponent } from './pages/documento/documento.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    { path: "factura/:rut", component: FacturaComponent },
    { path: "factura", component: FacturaComponent },

    {
        path: "documento",
        component: DocumentoComponent,
    },

    {
        path: "productos",
        component: ProductComponent,
    },
];
