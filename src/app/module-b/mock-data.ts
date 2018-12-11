import {InMemoryDbService} from 'angular-in-memory-web-api';
import {EntityB} from './entity-b';


export const entityb: EntityB = {
  id: '1',
  libelle: 'Entity B'
};

export class MockData implements InMemoryDbService {

  createDb() {
    return {
      entityb
    };
  }
}

