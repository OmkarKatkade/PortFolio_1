// app.module.ts
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,       // Declare SidebarComponent
    ExperienceComponent,    // Declare ExperienceComponent
    ProjectsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Component animations example
// @Component({
//   // ...
//   animations: [
//     trigger('fadeIn', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(20px)' }),
//         animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ])
//   ]
// }) 
// export class FadeInComponent{}