import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Projects} from "../models/projects";
import {ProjectService} from "./project.service";
import {ViewComponent} from "./view/view.component";
import {AddComponent} from "./add/add.component";
import {DetailsComponent} from "./details/details.component";

declare var bootstrap: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ViewComponent,
    AddComponent,
    DetailsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {
  projects: Projects [] = [];
  addShowComponent: boolean = false;
  @Input() projectDetailId!: Projects;
  editShowComponent: boolean = false;
  @Output() projectId = new EventEmitter<Projects>();
  @Input() closeEditComponent! : boolean;

  constructor(private projectService: ProjectService) {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects()
      .subscribe((list: Projects[]) => {
        this.projects = list;
      })
  }

  showAddComponent() {
    this.addShowComponent = !this.addShowComponent;
  }

  showEditComponent() {
    this.editShowComponent = !this.editShowComponent;
  }

  closeAddComponent($event: boolean) {
    this.showAddComponent();
    this.fetchProjects();
  }

  closeEditShowComponent($event: boolean) {
    this.showEditComponent();
  }

  projectSelected($event: Projects){
    console.log("projectselected: " + $event);
    this.projectDetailId = $event;
    this.showEditComponent();
    this.projectId.emit($event);
  }
}
