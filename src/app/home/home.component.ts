import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CaseService } from '../case.service';
import { MessageService } from '../message.service';
import { CaseData } from '../mock-cases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 /*  selectedCase: Case; */
  cases: CaseData []=[];

  constructor(private caseService: CaseService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCases();
  }
/* 
  onSelect(cas: Case): void {
    this.selectedCase = cas;
    this.messageService.add(`CaseService: Selected cas id=${cas.id}`);
  } */

  getCases(): void {
    this.caseService.getCases()
        .subscribe(data => this.cases = data);
  }

}
