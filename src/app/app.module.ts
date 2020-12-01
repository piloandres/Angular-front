import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { CrearUsuarioComponent } from './components/admin-usuarios/crear-usuario/crear-usuario.component';
import { ModificarUsuarioComponent } from './components/admin-usuarios/modificar-usuario/modificar-usuario.component';
import { ObtenerUsuariosComponent } from './components/admin-usuarios/obtener-usuarios/obtener-usuarios.component';
import { ObtenerAerolineasComponent } from './components/admin-aerolineas/obtener-aerolineas/obtener-aerolineas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    NavBarComponent,
    SideBarComponent,
    CrearUsuarioComponent,
    ModificarUsuarioComponent,
    ObtenerUsuariosComponent,
    ObtenerAerolineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
