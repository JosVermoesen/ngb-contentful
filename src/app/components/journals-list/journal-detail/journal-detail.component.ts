import { ContentfulService } from './../../../_services/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';


@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
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
    this.router.navigate(['/journal']);
  }
}
