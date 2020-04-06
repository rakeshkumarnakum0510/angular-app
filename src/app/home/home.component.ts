import { Component, OnInit } from "@angular/core";
import { CaseService } from "../case.service";
import { CaseData } from "../mock-cases";
import { Case } from '../case';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cases: Case[] = [];

  constructor(private caseService: CaseService) { 
   
  }

  ngOnInit() {
    this.getCases();
  }
  getCases(): void {
    this.caseService.getCases().subscribe(data => { this.cases = data });
    console.log("Home cases"+this.cases);
  }
  deleteCase(id) {
    this.caseService.deleteCase(id).subscribe(data => {
      this.getCases();
    });
  }
}
