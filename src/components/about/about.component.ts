import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    {
      icon: '🗣️',
      title: 'Communication',
      description: 'Clear communicator in team and client settings.',
      level: 90,
    },
    {
      icon: '🤝',
      title: 'Teamwork',
      description: 'Collaborative and always ready to help teammates.',
      level: 85,
    },
    {
      icon: '🧠',
      title: 'Problem-solving',
      description: 'Logical thinker who enjoys finding solutions.',
      level: 95,
    },
    {
      icon: '🚀',
      title: 'Adaptability',
      description: 'Quick to learn and adjust to new environments.',
      level: 88,
    },
    {
      icon: '🎯',
      title: 'Focus',
      description: 'Stays on track and pays attention to details.',
      level: 92,
    },
    {
      icon: '👥',
      title: 'Leadership',
      description: 'Capable of guiding teams toward shared goals.',
      level: 80,
    },
  ];

  
}
