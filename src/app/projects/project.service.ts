import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Projects} from "../models/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://localhost:7283/api/Project';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl);
  }
}

