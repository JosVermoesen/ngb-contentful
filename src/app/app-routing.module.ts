import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentTypeListComponent } from "./components/contenttype-list.component";
import { CompanytListComponent } from "./components/company-list/company-list.component";
import { CourseDetailComponent } from "./components/course-list/course-detail/course-detail.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { MarkdownListComponent } from "./components/markdown-list/markdown-list.component";
import { MarkdownDetailComponent } from "./components/markdown-list/markdown-detail/markdown-detail.component";
import { InsurancesListComponent } from './components/insurances-list/insurances-list.component';
import { InsuranceDetailComponent } from './components/insurances-list/insurance-detail/insurance-detail.component';
import { JournalDetailComponent } from './components/journals-list/journal-detail/journal-detail.component';
import { JournalsListComponent } from './components/journals-list/journals-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/contenttypes", pathMatch: "full" },
  { path: "contenttypes", component: ContentTypeListComponent },
  { path: "journal", component: JournalsListComponent },
  { path: "journal/:id", component: JournalDetailComponent },
  { path: "markdown", component: MarkdownListComponent },
  { path: "markdown/:id", component: MarkdownDetailComponent },
  { path: "insurances", component: InsurancesListComponent },
  { path: "insurance/:id", component: InsuranceDetailComponent },
  { path: "insuranceCompanies", component: CompanytListComponent },
  { path: "courses", component: CourseListComponent },
  { path: "courses/:id", component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
