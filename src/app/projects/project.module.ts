import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Project {

  public title: string;
  public info: string;
  public imagePath: string;
  public link: string;

  constructor(title: string, info: string, imagePath: string, link: string) {
    this.title = title;
    this.info = info;
    this.imagePath = imagePath;
    this.link = link;
  }

}
