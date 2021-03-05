import fuzzysort from 'fuzzysort';
import { ReactElement, useMemo } from 'react';
import { entityNames, globalStateProvider } from '../../utils';
import './results.scss';
import { Link } from 'react-router-dom';

const fuzzyPreparedEntityNames: Fuzzysort.Prepared[] = entityNames.map(
  (entityName: string): Fuzzysort.Prepared =>
    fuzzysort.prepare(entityName) as Fuzzysort.Prepared,
);

const FUZZYSORT_OPTIONS: Fuzzysort.Options = {
  allowTypo: true,
  limit: 100,
  threshold: -10000,
};

export default function Results(): ReactElement {
  const [search] = globalStateProvider.useGlobal('search');

  const fuzzyResults: Fuzzysort.Results = useMemo((): Fuzzysort.Results => {
    return fuzzysort.go(search, fuzzyPreparedEntityNames, FUZZYSORT_OPTIONS);
  }, [search]);

  return (
    <div className="results">
      <ul>
        {fuzzyResults.map(
          (fuzzyResult: Fuzzysort.Result): ReactElement => (
            <li key={fuzzyResult.target}>
              <Link
                to={`?entity=${fuzzyResult.target}`}
                title={fuzzyResult.target}
              >
                {fuzzyResult.target}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
