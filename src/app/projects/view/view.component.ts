import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Projects} from "../../models/projects";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  standalone: true,
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
    @Input() project!: Projects;
    @Output() projectSelected = new EventEmitter<Projects>();
    @Output() closeEditShowComponent = new EventEmitter<boolean>();

    constructor() { }
    // sendInfo(projectId : number) {
    //   this.router.navigate(['/details']);
    // }
    sendInfo() {
      this.projectSelected.emit(this.project)
      this.closeEditShowComponent.emit(true);
    }
}
