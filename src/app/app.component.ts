import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';


@Component({
  selector: 'app-root',
  imports: [
    AboutComponent, 
    ExperienceComponent, 
    FooterComponent, 
    HeaderComponent,
    RouterOutlet, 
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
