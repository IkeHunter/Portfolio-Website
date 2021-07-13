import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from './project.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [DataService]
})
export class ProjectsComponent implements OnInit {

  projects = [];

  constructor(public dataService: DataService, private http: HttpClient) {}

  ngOnInit() {

    this.projects = this.dataService.returnProjects();

  }

}
