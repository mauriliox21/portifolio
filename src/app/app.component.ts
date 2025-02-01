import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from "./components/first-section/first-section.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";
import { ModalSkillComponent } from "./components/modal-skill/modal-skill.component";
import { FavProjSectionComponent } from "./components/fav-proj-section/fav-proj-section.component";
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstSectionComponent,
    SkillsSectionComponent,
    ModalSkillComponent,
    MenuComponent,
    FavProjSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
