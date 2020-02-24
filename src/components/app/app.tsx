import React from 'react';
import { Results, Search } from '..';
import './app.scss';

export default function App(): JSX.Element {
  return (
    <main className="app">
      <h1>Peoplecott</h1>
      <Search />
      <Results />
    </main>
  );
}
