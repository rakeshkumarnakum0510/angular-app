import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Case } from './case';
import { CASES } from './mock-cases';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private messageService: MessageService) { }


  getCases(): Observable< Case[] > {
    this.messageService.add('CaseService: fetched cases');
    return of(CASES);
  }
  getCase(id: number): Observable<Case> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CaseService: fetched case id=${id}`);
    return of(CASES.find(function(item){
      return item.id === id;
    }));
   }
}
