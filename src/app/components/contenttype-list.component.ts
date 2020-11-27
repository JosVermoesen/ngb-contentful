import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from '../_services/contentful.service';

@Component({
  selector: 'app-contenttype-list',
  templateUrl: './contenttype-list.component.html',
  styleUrls: ['./contenttype-list.component.scss']
})
export class ContentTypeListComponent implements OnInit {
  contentTypeList: Observable<any>;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.contentTypeList = this.contentfulService.getContentTypes();

    // Only for development purpose
    this.contentfulService.consoleLogContentTypes();
  }

  goToContentListPage(contentListId: string) {
    // console.log (contentListId);
    this.router.navigate(['/' + contentListId]);
  }
}
