import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Projects} from "../../models/projects";
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import {ProjectsComponent} from "../projects.component";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  addProjectForm!: FormGroup;

  constructor (private formBuilder: FormBuilder,
               private projectService: ProjectService,
               private route: Router) {  }

  ngOnInit() {
    this.addProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.addProjectForm.valid) {
      const project: Projects = this.addProjectForm.value;
      this.projectService.createProject(project).subscribe({
        next: response => {
          this.route.navigate(['/projects'])
          //   .then(() => {
          //   this.projectsComponent.fetchProjects();
          //   // handle successful response, e.g., navigate to project list
          // });
        },
        error: error => {
          console.log("error");
          // handle error response, e.g., show error message
        }
      });
    }
  }
}
