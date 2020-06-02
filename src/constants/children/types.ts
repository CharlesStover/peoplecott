import EntityType from '../../types/entity';

export type Child = Omit<EntityType, 'name' | 'parentSource' | 'reasons'> &
  Pick<Required<EntityType>, 'parent'>;
