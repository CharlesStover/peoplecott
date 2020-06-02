import { CHILDREN, ENTITIES } from '../constants';
import Entity from '../types/entity';

const entityMap: Map<string, Entity> = new Map();

for (const [entityName, partialEntity] of Object.entries(ENTITIES)) {
  entityMap.set(entityName, {
    ...partialEntity,
    name: entityName,
  });
}

for (const [childName, partialChild] of Object.entries(CHILDREN)) {
  const parent: Entity | undefined = entityMap.get(partialChild.parent);
  if (!parent) {
    throw new Error('Child does not have parent.');
  }
  entityMap.set(childName, {
    name: childName,
    reasons: parent.reasons,
    parent: partialChild.parent,
    parentSources: partialChild.sources,
    sources: parent.sources,
  });
}

export default entityMap;
