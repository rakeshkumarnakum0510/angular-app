import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Case } from './case';

export class CaseData implements InMemoryDbService {
  createDb() {

    const cases: Case[] = [
      { id: 11, name: 'United States', date:'04-04-2020', newCase: 50, newDeath: 5 },
      { id: 12, name: 'United States', date:'05-04-2020', newCase: 40, newDeath: 10 },
      { id: 13, name: 'United States', date:'06-04-2020', newCase: 110, newDeath: 15 },

      { id: 14, name: 'Italy', date:'04-04-2020', newCase: 20, newDeath: 5 },
      { id: 15, name: 'Italy', date:'05-04-2020', newCase: 40, newDeath: 20 },
      { id: 16, name: 'Italy', date:'06-04-2020', newCase: 60, newDeath: 30 },

      { id: 17, name: 'China', date:'04-04-2020', newCase: 20, newDeath: 5 },
      { id: 18, name: 'China', date:'05-04-2020', newCase: 30, newDeath: 10 },
      { id: 19, name: 'China', date:'06-04-2020', newCase: 70, newDeath: 15 },

      { id: 20, name: 'India', date:'04-04-2020', newCase: 10, newDeath: 5  },
      { id: 21, name: 'India', date:'05-04-2020', newCase: 50, newDeath: 10  },
      { id: 22, name: 'India', date:'06-04-2020', newCase: 90, newDeath: 15  },

      { id: 23, name: 'Spain', date:'04-04-2020', newCase: 20, newDeath: 5 },
      { id: 24, name: 'Spain', date:'05-04-2020', newCase: 40, newDeath: 20 },
      { id: 25, name: 'Spain', date:'06-04-2020', newCase: 60, newDeath: 30 },
    ];
    return { cases };
  }
}
