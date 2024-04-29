import { Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'projects', loadComponent: () => ProjectsComponent },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)},
];
