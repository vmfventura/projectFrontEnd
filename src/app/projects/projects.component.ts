import {Component, OnInit, ViewChild, viewChild, ViewChildren} from '@angular/core';
import {Projects} from "../models/projects";
import {ProjectService} from "./project.service";
import {CommonModule} from "@angular/common";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";
import {ViewComponent} from "./view/view.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    ViewComponent,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {
  projects: Projects [] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(this.projects);
  displayedColumns = ["id", "name", "startDate", "endDate"];
  selection = new SelectionModel<Projects>(true, []);
  constructor(private projectService: ProjectService) {
    this.projectService.getProjects()
      .subscribe((list: Projects[]) => {
        this.projects = list;

        this.dataSource = new MatTableDataSource<Projects>;
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;

      })
  }
}
