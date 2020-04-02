import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Case } from './case';

export class CaseData implements InMemoryDbService {
  createDb() {

    const cases: Case[] = [
      { id: 11, name: 'United States', newCase: 203452, newDeath: 5002 },
      { id: 12, name: 'Italy', newCase: 115234, newDeath: 15009 },
      { id: 13, name: 'China', newCase: 80256, newDeath: 2456 },
      { id: 14, name: 'Spain', newCase: 90675, newDeath: 4567 },
      { id: 15, name: 'Germany', newCase: 70856, newDeath: 3452 },
      { id: 16, name: 'Iran', newCase: 60875, newDeath: 3421 },
      { id: 17, name: 'France', newCase: 50921, newDeath: 2467 },
      { id: 18, name: 'Switzerland', newCase: 30321, newDeath: 1976 },
      { id: 19, name: 'United Kingdom', newCase: 20904, newDeath: 1690 },
      { id: 20, name: 'South Korea', newCase: 1503, newDeath: 222 }
    ];
    return { cases };
  }
}
