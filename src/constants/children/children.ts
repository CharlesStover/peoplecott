import Entity from '../entity';
import {
  NESTLE_OUR_BRANDS,
  NESTLE_SOAKED_WATER_CONTROVERSY,
  NESTLE_HEALTHY_EATING,
  NESTLE_PROBIOTIC,
  NESTLE_NUTRITIONAL,
} from './constants';
import { Child } from './types';

/*
To add a child company, use the format
  ChildCompanyName: {
    parent: Entity.ParentCompany,
    source: 'https://...',
  },
*/
const CHILDREN: Record<string, Child> = {
  Aero: NESTLE_OUR_BRANDS,
  'After Eight': {
    parent: Entity.Nestle,
    sources: [
      'https://www.nestle.co.uk/en-gb/brands/chocolate_and_confectionery/boxed',
    ],
  },
  Alpo: NESTLE_OUR_BRANDS,
  Arrowhead: {
    parent: Entity.Nestle,
    sources: [
      'https://www.sbsun.com/2016/09/21/why-nestl-can-continue-to-bottle-water-in-the-san-bernardino-mountains/',
    ],
  },
  'Baby Ruth': NESTLE_SOAKED_WATER_CONTROVERSY,
  'Bakers Complete': NESTLE_OUR_BRANDS,
  Beba: NESTLE_PROBIOTIC,
  Benecalorie: NESTLE_NUTRITIONAL,
  Benefiber: NESTLE_NUTRITIONAL,
  Beneful: NESTLE_OUR_BRANDS,
  Beneprotein: NESTLE_NUTRITIONAL,
  'Blue Bottle Coffee Company': {
    parent: Entity.Nestle,
    sources: [
      'https://www.nytimes.com/2017/09/14/business/dealbook/nestle-blue-bottle-coffee.html',
    ],
  },
  Bonka: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=O2hVVxHY9ecC&pg=PA176'],
  },
  Boost: NESTLE_OUR_BRANDS,
  Buitoni: NESTLE_OUR_BRANDS,
  'Busy Boonne': {
    parent: Entity.Nestle,
    sources: [
      'https://www.stltoday.com/business/workplaces/nestl-purina-petcare/article_c72198bd-c47a-54ca-a9ab-63c6c0f658a3.html',
    ],
  },
  Butterfinger: NESTLE_SOAKED_WATER_CONTROVERSY,
  'Buxton Mineral Water Company': {
    parent: Entity.Nestle,
    sources: ['https://en.wikipedia.org/wiki/Buxton'],
  },
  Cailler: NESTLE_OUR_BRANDS,
  Carnation: NESTLE_OUR_BRANDS,
  Carola : {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  Carpathia: {
    parent: Entity.Nestle,
    sources: [
      'https://adage.com/article/news/nestle-s-maggi-keith-dilworth-prague-czech-republic/75903',
    ],
  },
  'Cat Chow': NESTLE_OUR_BRANDS,
  Cerelac: NESTLE_OUR_BRANDS,
  Chamyto: NESTLE_PROBIOTIC,
  Cheerios: NESTLE_OUR_BRANDS,
  Chef: NESTLE_OUR_BRANDS,
  'Chef-Mate': NESTLE_OUR_BRANDS,
  "Chef Michael's Canine Creations": NESTLE_OUR_BRANDS,
  'Chips Ahoy!': NESTLE_SOAKED_WATER_CONTROVERSY,
  Chocapic: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=5bVWNOtQskgC&pg=PA142'],
  },
  'CIB juice drink': NESTLE_NUTRITIONAL,
  'CIB lactose free': NESTLE_NUTRITIONAL,
  'CIB sugar free': NESTLE_NUTRITIONAL,
  'CIB VHC': NESTLE_NUTRITIONAL,
  'Cini-Minis': {
    parent: Entity.Nestle,
    sources: ['https://www.haaretz.com/food/1.5141446'],
  },
  'Cinnamon Grahams': NESTLE_HEALTHY_EATING,
  Clusters: NESTLE_HEALTHY_EATING,
  'Coco Shreddies': NESTLE_HEALTHY_EATING,
  'Coffee-Mate': NESTLE_OUR_BRANDS,
  'Cookie Crisp': NESTLE_HEALTHY_EATING,
  Contrex : {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  Crucial: NESTLE_NUTRITIONAL,
  'Crunch Cereal': {
    parent: Entity.Nestle,
    sources: [
      'https://www.myfitnesspal.com/food/calories/nestle-crunch-cereal-small-pack-234213964',
    ],
  },
  'Curiously Cinnamon': {
    parent: Entity.Nestle,
    sources: [
      'https://www.insidermedia.com/news/central-and-east/143200-operating-profits-soar-nestle-uk',
    ],
  },
  'Curiously Strawberry': {
    parent: Entity.Nestle,
    sources: [
      'https://www.myfitnesspal.com/food/calories/nestle-curiously-strawberry-215736879',
    ],
  },
  Davigel: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=ZJggAQAAIAAJ'],
  },
  Diabetisource: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=olshnFqCI0kC&pg=PA370'],
  },
  Dibs: {
    parent: Entity.Nestle,
    sources: [
      'https://books.google.com/books?id=EUrXAAAAQBAJ&pg=PA48',
      'https://books.google.com/books?id=Ckx-w7yuvTUC&pg=PT282',
    ],
  },
  'Dog Chow': NESTLE_OUR_BRANDS,
  "Dreyer's": NESTLE_OUR_BRANDS,
  Extreme: NESTLE_OUR_BRANDS,
  'Fancy Feast': NESTLE_OUR_BRANDS,
  Felix: NESTLE_OUR_BRANDS,
  Fibersource: NESTLE_NUTRITIONAL,
  Fitness: NESTLE_OUR_BRANDS,
  Friskies: NESTLE_OUR_BRANDS,
  'Frosted Shreddies': NESTLE_HEALTHY_EATING,
  Gerber: NESTLE_OUR_BRANDS,
  Glytrol: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=ICQPnhr71zwC&pg=PA325'],
  },
  'Golden Grahams': NESTLE_SOAKED_WATER_CONTROVERSY,
  'Good Start Natural Cultures': NESTLE_PROBIOTIC,
  Gourmet: NESTLE_OUR_BRANDS,
  'Juicy Juice': NESTLE_SOAKED_WATER_CONTROVERSY,
  'Haagen-Dazs': NESTLE_OUR_BRANDS,
  Hépar: {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  Herta: NESTLE_OUR_BRANDS,
  'Honey Nut Cheerios': NESTLE_HEALTHY_EATING,
  'Honey Nut Shredded Wheat': NESTLE_HEALTHY_EATING,
  'Hot Pockets': NESTLE_OUR_BRANDS,
  'Ice Mountain': {
    parent: Entity.Nestle,
    sources: [
      'https://www.mlive.com/news/2016/12/inside_nestle_ice_mountain.html',
    ],
  },
  Impact: NESTLE_NUTRITIONAL,
  'Impact advanced recovery': NESTLE_NUTRITIONAL,
  Isosource: NESTLE_NUTRITIONAL,
  KitKat: NESTLE_OUR_BRANDS,
  'La Laitiere': NESTLE_OUR_BRANDS,
  LC1: NESTLE_PROBIOTIC,
  'Lean Cuisine': NESTLE_OUR_BRANDS,
  "Libby's": NESTLE_SOAKED_WATER_CONTROVERSY,
  Lion: NESTLE_OUR_BRANDS,
  Lollo: {
    parent: Entity.Nestle,
    sources: [
      'http://www.estadao.com.br/noticias/impresso,na-onda-revival-nestle-brasil-relanca-chocolate-lollo-,931612,0.htm',
    ],
  },
  Maggi: NESTLE_OUR_BRANDS,
  'Mighty Dog': {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=pgbbPeyPOLcC&pg=PA157'],
  },
  Milkybar: NESTLE_OUR_BRANDS,
  Milo: NESTLE_OUR_BRANDS,
  "Minor's": NESTLE_OUR_BRANDS,
  Movenpick: NESTLE_OUR_BRANDS,
  NaturNes: NESTLE_OUR_BRANDS,
  Nescafe: NESTLE_OUR_BRANDS,
  'Nescafe 3 in 1': NESTLE_OUR_BRANDS,
  'Nescafe Cappuccino': NESTLE_OUR_BRANDS,
  'Nescafe Classic': NESTLE_OUR_BRANDS,
  'Nescafe Decaff': NESTLE_OUR_BRANDS,
  'Nescafe Dolce Gusto': NESTLE_OUR_BRANDS,
  'Nescafe Gold': NESTLE_OUR_BRANDS,
  Nespresso: NESTLE_OUR_BRANDS,
  Nesquik: NESTLE_OUR_BRANDS,
  'Nesquik Cereal': NESTLE_OUR_BRANDS,
  Nestea: NESTLE_OUR_BRANDS,
  'Nestle Ice Cream': NESTLE_OUR_BRANDS,
  'Nestle Pure Life': NESTLE_OUR_BRANDS,
  "Nestle Les Recettes de l'Atelier": NESTLE_OUR_BRANDS,
  Nido: NESTLE_OUR_BRANDS,
  'Novasource 2.0': NESTLE_NUTRITIONAL,
  'Novasource Renal': NESTLE_NUTRITIONAL,
  'Nutren 2.0': NESTLE_NUTRITIONAL,
  'Nutren Junior': NESTLE_OUR_BRANDS,
  'Nutren Renal': NESTLE_NUTRITIONAL,
  'Omega Plus': {
    parent: Entity.Nestle,
    sources: ['https://www.thesundaily.my/archive/1820096-BSARCH370620'],
  },
  Oreo: NESTLE_SOAKED_WATER_CONTROVERSY,
  Orion: NESTLE_OUR_BRANDS,
  "Partner's Blend": {
    parent: Entity.Nestle,
    sources: [
      "https://books.google.com/books?id=L3YTCgAAQBAJ&pg=PA169#v=snippet&q=Partner's%20Blend&f=false",
    ],
  },
  Peptamen: NESTLE_OUR_BRANDS,
  Peptinex: NESTLE_NUTRITIONAL,
  Perrier: NESTLE_OUR_BRANDS,
  Plancoët: {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  'Poland Spring': NESTLE_OUR_BRANDS,
  PowerBar: NESTLE_SOAKED_WATER_CONTROVERSY,
  Probalance: NESTLE_NUTRITIONAL,
  Purina: NESTLE_OUR_BRANDS,
  'Purina ONE': NESTLE_OUR_BRANDS,
  'Purina Pro Plan': NESTLE_OUR_BRANDS,
  'Quality Street': NESTLE_OUR_BRANDS,
  Quézac : {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  Replete: NESTLE_NUTRITIONAL,
  Resource: NESTLE_OUR_BRANDS,
  'Resource breeze': NESTLE_NUTRITIONAL,
  'S. Pellegrino': NESTLE_OUR_BRANDS,
  'Saint-Lambert': {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  "Sainte-Alix": {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  Schoeller: {
    parent: Entity.Nestle,
    sources: ['https://www.schoeller.de/'],
  },
  'Shredded Wheat': NESTLE_SOAKED_WATER_CONTROVERSY,
  'Shredded Wheat Bitesize': NESTLE_HEALTHY_EATING,
  Shreddies: {
    parent: Entity.Nestle,
    sources: ['https://books.google.com/books?id=RoPEeRerSaEC&pg=PA59'],
  },
  Sjora: NESTLE_OUR_BRANDS,
  Smarties: NESTLE_OUR_BRANDS,
  'Special.T': {
    parent: Entity.Nestle,
    sources: [
      'http://uk.reuters.com/article/uk-nestle-specialt-idUKBRE96U05C20130731',
      'https://www.designweek.co.uk/inspiration/nestle-special-t-packaging-bb-studio/',
      'https://www.nytimes.com/2010/05/20/business/global/20tea.html',
    ],
  },
  "Stouffer's": NESTLE_OUR_BRANDS,
  Supligen: {
    parent: Entity.Nestle,
    sources: [
      'https://www.dairyreporter.com/Article/2015/11/19/Nestle-Jamaica-to-divest-local-dairy-business-to-focus-on-international-brands',
    ],
  },
  'Sweet Earth': {
    parent: Entity.Nestle,
    sources: [
      'https://www.nestleusa.com/media/pressreleases/nestle-sweet-earth-foods',
    ],
  },
  "Taster's Choice": NESTLE_SOAKED_WATER_CONTROVERSY,
  Thomy: NESTLE_OUR_BRANDS,
  'Toll House': NESTLE_OUR_BRANDS,
  Traumacal: NESTLE_NUTRITIONAL,
  Vittel : {
    parent: Entity.Nestle,
    sources: ['https://i.redd.it/fw250qux78c31.png']
  },
  'Wagner GmbH': {
    parent: Entity.Nestle,
    sources: ['https://www.original-wagner.de/ueber-uns/geschichte'],
  },
  Wonka: NESTLE_SOAKED_WATER_CONTROVERSY,
};

export default CHILDREN;
