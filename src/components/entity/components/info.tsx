import React, { ReactElement, RefObject } from 'react';
import { Link } from 'react-router-dom';
import Entity from '../../../types/entity';
import { globalStateProvider } from '../../../utils';
import './info.scss';

interface Props {
  children: Entity;
}

export default React.memo(function Info({ children }: Props): ReactElement {
  const { name, parent, parentSources, reasons, sources } = children;

  const ref: RefObject<HTMLDivElement> = React.createRef();

  React.useEffect((): void => {
    globalStateProvider.setGlobal({ search: '' });
  }, [children]);

  React.useEffect((): void => {
    if (ref.current && ref.current.scrollIntoView) {
      ref.current.scrollIntoView();
    }
  }, [ref]);

  const parentSourcesCount: number = parentSources ? parentSources.length : 0;

  return (
    <section className="info" ref={ref}>
      <h2>{name}</h2>
      {parent && (
        <div className="info__parent-company">
          Parent company:{' '}
          <strong>
            <Link to={`?entity=${encodeURIComponent(parent)}`}>{parent}</Link>
          </strong>
          {parentSources && (
            <>
              {' '}
              (
              {parentSources.map(
                (parentSource: string, index: number): ReactElement => (
                  <a
                    href={parentSource}
                    key={parentSource}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    source{parentSourcesCount > 1 ? index + 1 : ''}
                  </a>
                ),
              )}
              )
            </>
          )}
        </div>
      )}
      {reasons.map(
        (reason: string, index: number): ReactElement => (
          <p key={index}>{reason}</p>
        ),
      )}
      <section className="info__sources">
        <h3>Sources:</h3>
        <ul>
          {sources.map(
            (source: string): ReactElement => (
              <li key={source}>
                <a
                  href={source}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {new URL(source).hostname}
                </a>
              </li>
            ),
          )}
        </ul>
      </section>
    </section>
  );
});
