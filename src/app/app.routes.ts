import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { EnfermedadesListComponent } from './public/enfermedades-list/enfermedades-list.component';
import { AreaPersonalUsuariosComponent } from './pages/User/pages/area-personal-usuarios/area-personal-usuarios.component';
import { AreaPersonalMedicosComponent } from './pages/Medicos/pages/area-personal-medicos/area-personal-medicos.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { Page404Component } from './pages/page404/page404.component';



export const routes: Routes = [


    //rutas publicas
    {path: 'home', component: HomeComponent},
    {path: 'lista-enfermedades', component: EnfermedadesListComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},

    // rutas de usuario
    {path: 'usario/areapersonal', component: AreaPersonalUsuariosComponent},
    //rutas de medico
    {path: 'medico/areapersonal', component: AreaPersonalMedicosComponent},
    

    //rutas de administrador



    //rutas por defecto 
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', component: Page404Component}
];
