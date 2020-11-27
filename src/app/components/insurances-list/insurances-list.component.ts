import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from './../../_services/contentful.service';

@Component({
  selector: 'app-insurances-list',
  templateUrl: './insurances-list.component.html',
  styleUrls: ['./insurances-list.component.css']
})
export class InsurancesListComponent implements OnInit {
  entriesList: Observable<any>;

  constructor(
    private router: Router,
    private cfService: ContentfulService
  ) { }

  ngOnInit() {
    this.entriesList = this.cfService.getContentList('insurances');

    // Only for development purpose
    this.cfService.consoleLogContentList('insurances');
  }

  markdownDetail(insuranceId: string) {
    this.router.navigate(['/insurance', insuranceId]);
  }

  goBack() {
    this.router.navigate(['/contenttypes']);
  }

}
