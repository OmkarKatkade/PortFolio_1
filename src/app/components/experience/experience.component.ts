import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Developer II',
      company: 'CRST The Transportation Solution',
      period: '2022-Present',
      responsibilities: [
        'Architected Spring Boot microservices handling 50k+ daily requests',
        'Led Kafka integration for real-time logistics tracking'
      ],
      tags: ['Java', 'Angular', 'Kafka']
    }
    // Add other experiences
  ];
}