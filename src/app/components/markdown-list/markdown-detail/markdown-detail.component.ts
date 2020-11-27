import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Entry } from 'contentful';

import { ContentfulService } from './../../../_services/contentful.service';

@Component({
  selector: 'app-markdown-detail',
  templateUrl: './markdown-detail.component.html',
  styleUrls: ['./markdown-detail.component.css']
})
export class MarkdownDetailComponent implements OnInit {
  markdownId: string;
  markdown: Entry<any>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cfService: ContentfulService
  ) { }

  ngOnInit() {
    this.markdownId = this.route.snapshot.paramMap.get('id');
    // this.markdownId = '64Wa2kez6Yo9OqgdAAxq8s';
    // Only for development purpose
    // this.cfService.consoleLogContent(this.courseId);

    this.cfService.getContentDetail(this.markdownId).subscribe(markdown => {
      this.markdown = markdown;
    });

  }

  goBack() {
    this.router.navigate(['/markdown']);
  }
}
