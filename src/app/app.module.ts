import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './about/personal/personal.component';
import { BusinessComponent } from './about/business/business.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    PersonalComponent,
    BusinessComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
