import { Component, OnInit } from "@angular/core";
import { CaseService } from "../case.service";
import { CaseData } from "../mock-cases";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cases: CaseData[] = [];

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.getCases();
  }
  getCases(): void {
    this.caseService.getCases().subscribe(data => { this.cases = data });
  }
  deleteCase(id) {
    this.caseService.deleteCase(id).subscribe(data => {
      this.getCases();
    });
  }
}
