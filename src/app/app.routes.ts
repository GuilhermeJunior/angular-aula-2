import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarrolistComponent } from './components/carros/carrolist/carrolist.component';
import { CarrodetailsComponent } from './components/carros/carrodetails/carrodetails.component';
import { MarcalistComponent } from './components/marcas/marcalist/marcalist.component';
import { MarcadetailsComponent } from './components/marcas/marcadetails/marcadetails.component';

export const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: PrincipalComponent , children: [
    { path: "carros", component: CarrolistComponent },
    { path: "carros/new", component: CarrodetailsComponent},
    { path: "carros/edit/:id", component: CarrodetailsComponent},
    { path: "marcas", component: MarcalistComponent },
    { path: "marcas/new", component: MarcadetailsComponent},
    { path: "marcas/edit/:id", component: MarcadetailsComponent},
  ]}
];
