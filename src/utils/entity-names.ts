import entitiesJson from '../entities.json';

const entityNames: string[] = [];

for (const entity of entitiesJson.entities) {
  entityNames.push(entity.name);
}

for (const entityName of Object.keys(entitiesJson.aliases)) {
  entityNames.push(entityName);
}

export default entityNames;
