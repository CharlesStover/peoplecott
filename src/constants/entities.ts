import EntityType from '../types/entity';
import Entity from './entity';

const ENTITIES: Record<string, Omit<EntityType, 'name'>> = {
  [Entity.Nestle]: {
    reasons: [
      'Nestlé aggressively markets breast milk substitutes, particularly in underdeveloped countries.',
    ],
    sources: ['https://en.wikipedia.org/wiki/Nestl%C3%A9_boycott'],
  },
};

export default ENTITIES;
