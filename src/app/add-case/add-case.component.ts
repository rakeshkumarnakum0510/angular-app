import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { MessageService } from '../message.service';
import { Case } from '../case';



@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css']
})
export class AddCaseComponent implements OnInit {
  
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
