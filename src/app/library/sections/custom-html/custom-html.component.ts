import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-html',
  standalone: true,
  imports: [],
  templateUrl: './custom-html.component.html',
  styleUrl: './custom-html.component.css',
})
export class CustomHtmlComponent {
  @Input() data: any;
}
