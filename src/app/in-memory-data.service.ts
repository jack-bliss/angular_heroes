import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Fox' },
      { id: 12, name: 'Falco' },
      { id: 13, name: 'Marth' },
      { id: 14, name: 'Sheik' },
      { id: 15, name: 'Puff' },
      { id: 16, name: 'Peach' },
      { id: 17, name: 'Ice Climbers' },
      { id: 18, name: 'Cpt. Falcon' },
      { id: 19, name: 'Pikachu' },
      { id: 20, name: 'Samus' },
      { id: 21, name: 'Yoshi' },
      { id: 22, name: 'Luigi' },
      { id: 23, name: 'Ganondorf' }
    ];
    return {heroes};
  }
}
