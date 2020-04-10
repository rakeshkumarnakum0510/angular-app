import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Case } from './case';

export class CaseData implements InMemoryDbService {
  createDb() {

    const cases: Case[] = [
      new Case (11, 'United States','04-04-2020', 10, 5 ),
      new Case (12, 'United States','05-04-2020', 50, 5 ),
      new Case (13, 'United States','06-04-2020', 110, 15 ),
      new Case (14, 'Italy','04-04-2020', 20, 10 ),
      new Case (15, 'Italy','05-04-2020', 80, 45 ),
      new Case (16, 'Italy','06-04-2020', 100, 75 ),
      new Case (17, 'China','04-04-2020', 20, 5 ),
      new Case (18, 'China','05-04-2020', 80, 15 ),
      new Case (19, 'China','06-04-2020', 100, 35 ),
      new Case (20, 'India','04-04-2020', 30, 5 ),
      new Case (21, 'India','05-04-2020', 70, 15 ),
      new Case (22, 'India','06-04-2020', 90, 25 ),
      new Case (23, 'Spain','04-04-2020', 30, 2),
      new Case (24, 'Spain','05-04-2020', 90, 4 ),
      new Case (25, 'Spain','06-04-2020', 120, 15 ),
    ];
    return { cases };
  }
}
