import { Component, OnInit } from '@angular/core';
import { Case } from '../case';
import { CaseService } from '../case.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedCase: Case;
  cases: Case [];

  constructor(private caseService: CaseService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCases();
  }

  onSelect(cas: Case): void {
    this.selectedCase = cas;
    this.messageService.add(`CaseService: Selected cas id=${cas.id}`);
  }

  getCases(): void {
    this.caseService.getCases()
        .subscribe(cases => this.cases = cases);
  }

}
