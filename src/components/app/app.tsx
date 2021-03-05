import AwsuiDarkMode from 'awsui-dark-mode';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Entity, Results, Search } from '..';
import './app.scss';

export default function App(): ReactElement {
  return (
    <AwsuiDarkMode root="body">
      <BrowserRouter>
        <main className="app">
          <h1>Peoplecott</h1>
          <Entity />
          <Search />
          <Results />
        </main>
      </BrowserRouter>
    </AwsuiDarkMode>
  );
}
