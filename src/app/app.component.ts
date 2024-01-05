import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './library/button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ynmo';
  pages: any[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get<{ data: any[] }>('http://localhost:1337/api/pages', {
        headers: {
          Authorization: `Bearer ecb158c1123cc612b2b964192eb6611c77f7e2f86416ac3524cd6defaa1bb12069fd3b2f9460064811622bb422075c6a097109c415c2bc18b7b1aca68791346d3c8c1e3ffec927ea557ea188f5db705087a1c20a58677aae27cff32c772862f46c5b738a06d9f6035dc871c17b3a57ae938fc362da851df66e243352f3293391`,
        },
      })
      .subscribe((value) => {
        console.log(value.data);
        this.pages = value.data;
      });
  }
}
