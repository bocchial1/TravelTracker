import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, 
    },
    {
        path: 'login',
        component: LoginComponent, 
    },
    {
        path: 'register',
        component: RegisterComponent, 
    },
    {
        path: 'project-list',
        component: ProjectListComponent, 
    }

];
