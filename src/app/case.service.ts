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
}
