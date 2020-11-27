import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from './../../_services/contentful.service';

@Component({
  selector: 'app-journals-list',
  templateUrl: './journals-list.component.html',
  styleUrls: ['./journals-list.component.css']
})
export class JournalsListComponent implements OnInit {
  entriesList: Observable<any>;

  constructor(
    private router: Router,
    private cfService: ContentfulService
  ) { }

  ngOnInit() {
    this.entriesList = this.cfService.getContentList('journal');

    // Only for development purpose
    this.cfService.consoleLogContentList('journal');
  }

  markdownDetail(journalId: string) {
    this.router.navigate(['/journal', journalId]);
  }

  goBack() {
    this.router.navigate(['/contenttypes']);
  }

}
