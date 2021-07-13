import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get('http://admin.ikehunter.com/wp-json/wp/v2/posts').subscribe(data => {
    //   for(let key in data) {
    //     console.log(data[0].title);
    //   }
    // })
  }
}
