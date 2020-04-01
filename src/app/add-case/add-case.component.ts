import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { MessageService } from '../message.service';
import { Case } from '../Case';
import { FormGroup, FormControl } from '@angular/forms';
import { CaseData } from '../mock-cases';
import { Router } from '@angular/router'




@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css']
})
export class AddCaseComponent implements OnInit {

  caseFormGroup: FormGroup;
  cases:CaseData[];
  countries = [];

  constructor(private caseService: CaseService,private router: Router,){}

  ngOnInit() {

    this.caseFormGroup = new FormGroup(
      {
        name : new FormControl(''),
        newCase : new FormControl(''),
        newDeath : new FormControl('')
      },
    );
    this.getCountries();
  }

   /* model =new Case(0," ",0,0);

  submitted = false;
  onSubmit() { this.submitted = true; } */

 

  getCountries():void{
    this.countries = this.caseService.getCountries();
  }
  addCase() {
    this.caseService.addCase(this.caseFormGroup.value).subscribe(data => {
      //this.cases = data;
      console.log(this.cases);
      this.router.navigate(['/home']);
    });

  } 
/* 
  onSubmit(caseForm: NgForm) {
    console.log(caseForm.value);  
    console.log(caseForm.valid); 
  } */

}
