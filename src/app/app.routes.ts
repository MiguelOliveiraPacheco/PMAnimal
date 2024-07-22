import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AnimalRegisterComponent } from './animal-register/animal-register.component';
import { AnimalsComponent } from './animals/animals.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'animal-register', component: AnimalRegisterComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: '**', component: Error404Component }
];