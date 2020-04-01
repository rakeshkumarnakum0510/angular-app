import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Case } from './case';

export class CaseData implements InMemoryDbService{
  createDb(){
    
    const cases: Case[] = [
      { id: 11, name: 'CHINA', newCase: 100, newDeath: 2 },
      { id: 12, name: 'ITALY', newCase: 200, newDeath: 2 },
      { id: 13, name: 'USA', newCase: 400, newDeath: 2 },
      { id: 14, name: 'SPAIN', newCase: 1000, newDeath: 2 },
      { id: 15, name: 'GERMANY', newCase: 10, newDeath: 2 },
      { id: 16, name: 'IRAN', newCase: 10, newDeath: 2 },
      { id: 17, name: 'FRANCE', newCase: 10, newDeath: 2 },
      { id: 18, name: 'SWITZERLAND', newCase: 10, newDeath: 2 },
      { id: 19, name: 'UK', newCase: 10, newDeath: 2 },
      { id: 20, name: 'S.KOREA', newCase: 10, newDeath: 2 }
    ];
    return {cases};
  }
}
