import { Header } from '../header/Header';
import { Services } from '../services';
import { Route, Routes } from 'react-router';

import style from './app.module.scss';
import '../shared/styles/styles.scss';

import '../shared/i18n';

export function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className={style.wrapper}>
            <Header />
            <Services />
          </div>
        }
      />
    </Routes>
  );
}
