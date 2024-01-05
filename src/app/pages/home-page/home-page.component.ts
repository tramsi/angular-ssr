import { Component } from '@angular/core';
import { PageStructureComponent } from '../../library/page-structure/page-structure.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PageStructureComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  homePage: any;
  constructor(private http: HttpClient) {
    this.http
      .get<{ data: any }>(
        'http://localhost:1337/api/home-page?populate[sections][populate][button][populate]=*&populate[sections][populate][media][populate]=*',
        {
          headers: {
            Authorization: `Bearer ecb158c1123cc612b2b964192eb6611c77f7e2f86416ac3524cd6defaa1bb12069fd3b2f9460064811622bb422075c6a097109c415c2bc18b7b1aca68791346d3c8c1e3ffec927ea557ea188f5db705087a1c20a58677aae27cff32c772862f46c5b738a06d9f6035dc871c17b3a57ae938fc362da851df66e243352f3293391`,
          },
        }
      )
      .subscribe((value) => {
        this.homePage = value.data;
        console.log(this.homePage);
      });
  }
}
