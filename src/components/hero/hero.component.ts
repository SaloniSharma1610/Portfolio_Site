import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hero',
  imports: [SkillsComponent,ProjectComponent,ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
