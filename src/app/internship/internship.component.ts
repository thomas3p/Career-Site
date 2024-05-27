import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit{
  @Input() content: any;

  ngOnInit(): void {
    this.showAllContent();
  }
  constructor(private contentService: ContentService, private router: Router) { }

  showAllContent() {
    this.contentService.getContent().subscribe((content: any[]) => {
      this.content = content;
    });
  }
  getContentById(contentId: number) {
    this.contentService.getContentById(contentId).subscribe((content: any) => {
      console.log("🚀 ~ ProductService ~ getContentById ~ content:", content);
    });
  }

}
