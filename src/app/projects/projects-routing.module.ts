import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./view/view.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  { path: 'view', component: ViewComponent},
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
