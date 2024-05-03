import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn, Validators
} from "@angular/forms";
import {Projects} from "../../models/projects";
import {ProjectService} from "../project.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  addProjectForm!: FormGroup;
  tryToSubmit = false;
  @Output() closeShowComponent = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.addProjectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    }, {validators: this.testeValidators});
  }

  testeValidators: ValidatorFn = (
    control: AbstractControl,
    ): ValidationErrors | null => {
    let errors: ValidationErrors = {};
    let name = control.get('name');
    let startDate = control.get('startDate');
    let endDate = control.get('endDate');

    if (name && name.value) {
      let length = name.value.length;
      if (length <= 2 || length > 50) {
        errors["invalidName"] = true;
      }
    } else {
      errors["requiredName"] = true;
    }

    if (startDate && startDate.value) {
      const date = new Date(startDate.value);
      if (isNaN(date.getTime())) {
        errors["invalidStartDate"] = true;
      }
    } else {
      errors["requiredStartDate"] = true;
    }

    if (endDate && endDate.value) {
      const date = new Date(endDate.value);
      if (isNaN(date.getTime())) {
        errors["invalidEndDate"] = true;
      }
    } else {
      errors["requiredEndDate"] = true;
    }

    if ( startDate?.value > endDate?.value) {
      errors["invalidDate"] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }

  onSubmit() {
    this.addProjectForm.updateValueAndValidity();
    this.tryToSubmit = true;
    if (this.addProjectForm.valid) {
      const project: Projects = this.addProjectForm.value;
      this.projectService.createProject(project).subscribe({
        next: response => {
          console.log("done it");
        },
        error: error => {
          console.log("error");
        },
        complete: () => {
          this.goBack();
        }
      });
    } else {
      console.log("not valid");
    }
  }

  goBack(): void {
    this.closeShowComponent.emit(false);
  }
}
