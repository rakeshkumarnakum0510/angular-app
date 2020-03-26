import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { CaseService } from '../case.service';
import { ActivatedRoute } from '@angular/router';
import { Case } from '../case';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  
 case:Case;
  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCase();
  }

  getCase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id)
      .subscribe(cas => this.case = cas);
  }

  goBack(): void {
    this.location.back();
  }

}
