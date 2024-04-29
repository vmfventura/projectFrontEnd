import {Component, Input} from '@angular/core';
import {Projects} from "../../models/projects";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  imports: [ ],
  standalone: true,
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() project!: Projects;
}
