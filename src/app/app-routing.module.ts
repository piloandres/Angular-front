import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ObtenerUsuariosComponent } from './components/admin-usuarios/obtener-usuarios/obtener-usuarios.component';
import { CrearUsuarioComponent } from './components/admin-usuarios/crear-usuario/crear-usuario.component';
import { ModificarUsuarioComponent } from './components/admin-usuarios/modificar-usuario/modificar-usuario.component';
import { ObtenerAerolineasComponent } from './components/admin-aerolineas/obtener-aerolineas/obtener-aerolineas.component';
import { EditarAerolineaComponent } from './components/admin-aerolineas/editar-aerolinea/editar-aerolinea.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { LogAuditoriaComponent } from './components/log-auditoria/log-auditoria.component';
import { ConsultaTerminalesComponent } from './components/terminales/consulta-terminales/consulta-terminales.component';
import { CrearTerminalComponent } from './components/terminales/crear-terminal/crear-terminal.component';
import { EditarTerminalComponent } from './components/terminales/editar-terminal/editar-terminal.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'obtener-usuarios', component: ObtenerUsuariosComponent},
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'editar-usuario/:username', component: ModificarUsuarioComponent},
  { path: 'aerolineas', component: ObtenerAerolineasComponent},
  { path: 'aerolineas/form/:id', component: EditarAerolineaComponent},
  { path: 'transacciones', component: TransaccionesComponent},
  { path: 'log', component: LogAuditoriaComponent},
  { path: 'terminales', component: ConsultaTerminalesComponent},
  { path: 'terminales/crear', component: CrearTerminalComponent},
  { path: 'terminales/editar', component: EditarTerminalComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
