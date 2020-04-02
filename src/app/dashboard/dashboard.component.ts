import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { Case } from '../case';
import { CaseData } from '../mock-cases';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cases: CaseData[];

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.getCases();
  }
  getCases(): void {
    this.caseService.getCases()
      .subscribe(cases => this.cases = cases.slice(0, 4));
  }
}
