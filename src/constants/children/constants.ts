import Entity from '../entity';
import { Child } from './types';

export const NESTLE_HEALTHY_EATING: Child = {
  parent: Entity.Nestle,
  sources: ['https://books.google.com/books?id=RoPEeRerSaEC&pg=PA59'],
};

export const NESTLE_NUTRITIONAL: Child = {
  parent: Entity.Nestle,
  sources: ['https://books.google.com/books?id=NJu4CQAAQBAJ&pg=PA85'],
};

export const NESTLE_OUR_BRANDS: Child = {
  parent: Entity.Nestle,
  sources: [
    'https://web.archive.org/web/20200405214442/https://www.nestle.com/aboutus/overview/ourbrands',
  ],
};

export const NESTLE_PROBIOTIC: Child = {
  parent: Entity.Nestle,
  sources: ['https://books.google.com/books?id=nIn8EIS2iE8C&pg=PA731'],
};

export const NESTLE_SOAKED_WATER_CONTROVERSY: Child = {
  parent: Entity.Nestle,
  sources: [
    'https://www.coloradoindependent.com/2010/08/19/nestle-soaked-in-water-controversy-around-the-world/',
  ],
};
