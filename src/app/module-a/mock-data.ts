import {InMemoryDbService} from 'angular-in-memory-web-api';
import {EntityA} from './entity-a';

export const entitya: EntityA = {
  id: '1',
  libelle: 'Entity A'
};

export class MockData implements InMemoryDbService {

  createDb() {
    return {
      entitya
    };
  }
}

