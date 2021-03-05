import { ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router';
import EntityType from '../../types/entity';
import { entityMap } from '../../utils';
import { Info } from './components';

export default function Entity(): null | ReactElement {
  const { search } = useLocation();

  const entity: EntityType | null = useMemo((): EntityType | null => {
    const urlSearchParams: URLSearchParams = new URLSearchParams(search);
    const entityName: null | string = urlSearchParams.get('entity');
    if (entityName === null) {
      return null;
    }
    const entity: EntityType | undefined = entityMap.get(entityName);
    if (typeof entity === 'undefined') {
      return null;
    }
    return entity;
  }, [search]);

  if (entity === null) {
    return null;
  }

  return <Info>{entity}</Info>;
}
