import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { VideoTestimonialsComponent } from '../sections/video-testimonials/video-testimonials.component';
import { CustomHtmlComponent } from '../sections/custom-html/custom-html.component';

@Component({
  selector: 'app-page-structure',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    VideoTestimonialsComponent,
    CustomHtmlComponent,
  ],
  templateUrl: './page-structure.component.html',
  styleUrl: './page-structure.component.css',
})
export class PageStructureComponent {
  @Input() sectionslist: any[] = [];
}
