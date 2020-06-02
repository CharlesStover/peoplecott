import { CHILDREN, ENTITIES } from '../constants';

const entityNames: string[] = [];

for (const entityName of Object.keys(ENTITIES)) {
  entityNames.push(entityName);
}

for (const entityName of Object.keys(CHILDREN)) {
  entityNames.push(entityName);
}

export default entityNames;
