import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';



const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'encabezado', component:EncabezadoComponent
  },
  {
    path:'listado-pacientes', component:ListadoPacientesComponent
  },
  {
    path:'agregar-medicamento', component:AgregarMedicamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
