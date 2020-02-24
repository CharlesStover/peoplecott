import entitiesJson from '../entities.json';

interface Entity {
  aliasOf?: string;
  name: string;
  reasons: string[];
}

const entityMap: Map<string, Entity> = new Map();

for (const entity of entitiesJson.entities) {
  entityMap.set(entity.name, entity);
}

for (const [name, aliasOf] of Object.entries(entitiesJson.aliases)) {
  entityMap.set(name, {
    aliasOf,
    name,
    reasons: entityMap.get(aliasOf)?.reasons || [],
  });
}

export default entityMap;
