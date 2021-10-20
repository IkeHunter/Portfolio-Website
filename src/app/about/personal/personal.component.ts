import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  resumeLink = '';

  constructor(private http: HttpClient) {
    this.http.get('https://admin.ikehunter.com/wp-json/wp/v2/resumes')

    .subscribe(data => {
      for (const key in Object.keys(data)) {
        if (data[key]) {
          // console.log(data[key].resume.guid);
          this.resumeLink = data[key].resume.guid;
        }
      }
    });
  }



  ngOnInit() {
    // console.log(this.resumeLink);
  }

}
