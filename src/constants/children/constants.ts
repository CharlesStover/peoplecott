import Entity from '../entity';
import { Child } from './types';

export const NESTLE_OUR_BRANDS: Child = {
  parent: Entity.Nestle,
  sources: [
    'https://web.archive.org/web/20200405214442/https://www.nestle.com/aboutus/overview/ourbrands',
  ],
};

export const NESTLE_SOAKED_WATER_CONTROVERSY: Child = {
  parent: Entity.Nestle,
  sources: [
    'https://www.coloradoindependent.com/2010/08/19/nestle-soaked-in-water-controversy-around-the-world/',
  ],
};
