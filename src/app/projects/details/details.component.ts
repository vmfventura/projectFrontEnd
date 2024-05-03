import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Projects} from "../../models/projects";
import {ProjectService} from "../project.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() projectId!: Projects;
  // project!: Projects;
  @Output() closeEditShowComponent = new EventEmitter<boolean>();

  constructor( private projectService: ProjectService) {
    // this.fetchProject(2);
  }

  // fetchProject(projectDetailId: number) {
  //   this.projectService.getProject(projectDetailId)
  //     .subscribe(
  //       (projectData) => {
  //         this.project = projectData;
  //         // console.log(projectData);
  //       }
  //     );
  // }

  goBack(): void {
    this.closeEditShowComponent.emit(false);
  }
}
