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

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'obtener-usuarios', component: ObtenerUsuariosComponent},
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'editar-usuario/:username', component: ModificarUsuarioComponent},
  { path: 'aerolineas', component: ObtenerAerolineasComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
