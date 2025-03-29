import { AreaPersonalAdminComponent } from './pages/Admin/pages/area-personal-admin/area-personal-admin.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { EnfermedadesListComponent } from './public/enfermedades-list/enfermedades-list.component';
import { AreaPersonalUsuariosComponent } from './pages/User/pages/area-personal-usuarios/area-personal-usuarios.component';
import { AreaPersonalMedicosComponent } from './pages/Medicos/pages/area-personal-medicos/area-personal-medicos.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { authGuard } from './seguridad/guards/auth.guard';
import { roleGuard } from './seguridad/role-guard';



export const routes: Routes = [


    //rutas publicas
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'lista-enfermedades', component: EnfermedadesListComponent, canActivate: [authGuard]},
    {path: 'login', component:LoginComponent, canActivate: [authGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [authGuard]},

    // rutas de usuario
    {path: 'usario/areapersonal', component: AreaPersonalUsuariosComponent, canActivate: [roleGuard], data: {expectedRole: 'PACIENTE'} },
    //rutas de medico
    {path: 'medico/areapersonal', component: AreaPersonalMedicosComponent, canActivate: [roleGuard], data: {expectedrole: 'DOCTOR'}},
    //rutas de administrador
    {path: 'admin/areapersonal', component: AreaPersonalAdminComponent, canActivate: [roleGuard], data: {expectedRole: 'ADMON'}},


    //rutas por defecto 
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', component: Page404Component}
];
