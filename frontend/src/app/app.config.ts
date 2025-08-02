import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { UsuarioListComponent } from './features/usuarios/list/usuario-list.component';
import { UsuariosFormComponent } from './features/usuarios/form/usuarios-form/usuarios-form';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfisFormComponent } from './features/perfis/form/perfis-form/perfis-form';
import { PerfisListComponent } from './features/perfis/list/perfis-list.component/perfis-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'perfis', pathMatch: 'full' },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/form', component: UsuariosFormComponent },
  { 
    path: 'usuarios/form/:id', 
    component: UsuariosFormComponent, 
    renderMode: 'default' 
  },

  { path: 'perfis', component: PerfisListComponent },
  { path: 'perfis/form', component: PerfisFormComponent },
  { 
    path: 'perfis/form/:id', 
    component: PerfisFormComponent, 
    renderMode: 'default' 
  },

  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(ReactiveFormsModule),
  ]
};
