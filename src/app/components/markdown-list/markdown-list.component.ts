import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from './../../_services/contentful.service';

@Component({
  selector: 'app-markdown-list',
  templateUrl: './markdown-list.component.html',
  styleUrls: ['./markdown-list.component.css']
})
export class MarkdownListComponent implements OnInit {
  entriesList: Observable<any>;

  constructor(
    private router: Router,
    private cfService: ContentfulService
  ) { }

  ngOnInit() {
    this.entriesList = this.cfService.getContentList('markdown');

    // Only for development purpose
    this.cfService.consoleLogContentList('markdown');
  }

  markdownDetail(markdownId: string) {
    this.router.navigate(['/markdown', markdownId]);
  }

  goBack() {
    this.router.navigate(['/contenttypes']);
  }
}
