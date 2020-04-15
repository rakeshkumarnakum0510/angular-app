import { Component, OnInit } from "@angular/core";
import { CaseService } from "../case.service";
import { Case } from '../case';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cases: Case[] = [];
  todayCases=[];
  countryCases=[];
  sumOfcases=[];

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.getCases();
  }
  getCases(): void {
    this.caseService.getCases().subscribe(data => { 
      this.cases = data ;
      this.todayCases=this.cases.filter( a => a.date == "14-04-2020");
  
      this.todayCases.forEach((el)=>{
         const ccases = this.cases.filter(c => c.name == el.name);
             const sumOfcases =ccases.reduce((accum,item) => accum + item.newCase, 0);
             const sumOfdeaths =ccases.reduce((accum,item) => accum + item.newDeath, 0);
          el.totalCases= sumOfcases;
          el.totalDeaths = sumOfdeaths;
        
      }); 
    });
    
  }

  
  deleteCase(id) {
    this.caseService.deleteCase(id).subscribe(data => {
      this.getCases();
    });
  }
}
