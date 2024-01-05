import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './video-testimonials.component.html',
  styleUrl: './video-testimonials.component.css',
})
export class VideoTestimonialsComponent {
  @Input() data: any;
}
