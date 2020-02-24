import React, { ChangeEvent } from 'react';
import { globalStateProvider } from '../../utils';

export default function Search(): JSX.Element {
  const [search, setSearch] = globalStateProvider.useGlobal('search');

  const handleSearchChange = React.useCallback(
    async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      await setSearch(e.currentTarget.value);
    },
    [setSearch],
  );

  return <input onChange={handleSearchChange} value={search} />;
}
