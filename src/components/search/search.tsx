import { ChangeEvent, ReactElement, useCallback } from 'react';
import { globalStateProvider } from '../../utils';

export default function Search(): ReactElement {
  const [search, setSearch] = globalStateProvider.useGlobal('search');

  const handleSearchChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      await setSearch(e.currentTarget.value);
    },
    [setSearch],
  );

  return (
    <input
      onChange={handleSearchChange}
      placeholder="Search for a brand"
      value={search}
    />
  );
}
