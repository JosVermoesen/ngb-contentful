import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Entry } from 'contentful';

import { ContentfulService } from './../../../_services/contentful.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseId: string;
  course: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cfService: ContentfulService
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    // Only for development purpose
    // this.cfService.consoleLogContent(this.courseId);

    this.cfService.getContentDetail(this.courseId).subscribe(course => {
      this.course = course;
    });

    // TODO: marked for display
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
