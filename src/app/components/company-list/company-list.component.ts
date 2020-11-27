import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from '../../_services/contentful.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanytListComponent implements OnInit {
  entriesList: Observable<any>;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.entriesList = this.contentfulService.getContentList(
      'insuranceCompanies'
    );

    // Only for development purpose
    this.contentfulService.consoleLogContentList('insuranceCompanies');
  }

  goBack() {
    this.router.navigate(['/contenttypes']);
  }
}
