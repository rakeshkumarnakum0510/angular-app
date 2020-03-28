import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { MessageService } from '../message.service';
import { NgForm } from '@angular/forms';
import { Case } from '../Case';



@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css']
})
export class AddCaseComponent implements OnInit {

  countries = [];
  constructor(private caseService: CaseService){

  }
  ngOnInit() {
    this.getCountries();
  }

   model =new Case( 0,"this.countries[50] ",0,0);

  submitted = false;
  onSubmit() { this.submitted = true; }

  addCase(){
    console.log(this.model);
  } 

  getCountries():void{
    this.countries = this.caseService.getCountries();
  }

/* 
  onSubmit(caseForm: NgForm) {
    console.log(caseForm.value);  
    console.log(caseForm.valid); 
  } */

}
