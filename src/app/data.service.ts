import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './projects/project.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [];

  constructor(private http: HttpClient) {

    this.http.get('http://admin.ikehunter.com/wp-json/wp/v2/projects')

    .subscribe(data => {

      for(var key in Object.keys(data)) {
        let newProject = new Project(data[key].project, data[key].info, data[key].image.guid, data[key].link);
        this.projects.push(newProject);

      }

    })
  }

  returnProjects() {
    return this.projects;
  }


}