import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Entity, Results, Search } from '..';
import './app.scss';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <main className="app">
        <h1>Peoplecott</h1>
        <Entity />
        <Search />
        <Results />
      </main>
    </BrowserRouter>
  );
}
