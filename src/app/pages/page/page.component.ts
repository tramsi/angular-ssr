import { Component, OnInit } from '@angular/core';
import { PageStructureComponent } from '../../library/page-structure/page-structure.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, PageStructureComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent implements OnInit {
  pageData: any;
  constructor(
    private activaterRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.activaterRoute.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.http
        .get<{ data: any[] }>(
          `http://localhost:1337/api/pages?filters[slug]=${slug}&populate[sections][populate][button][populate]=*&populate[sections][populate][media][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ecb158c1123cc612b2b964192eb6611c77f7e2f86416ac3524cd6defaa1bb12069fd3b2f9460064811622bb422075c6a097109c415c2bc18b7b1aca68791346d3c8c1e3ffec927ea557ea188f5db705087a1c20a58677aae27cff32c772862f46c5b738a06d9f6035dc871c17b3a57ae938fc362da851df66e243352f3293391`,
            },
          }
        )
        .subscribe((value) => {
          if (value.data.length > 0) {
            this.pageData = value.data[0];
            console.log(this.pageData);
          }
        });
    });
  }
}
