import { Header } from '../header/Header';
import { Services } from '../services';

import style from './app.module.scss';
import '../shared/styles/styles.scss';

import '../shared/i18n';

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Services />
    </div>
  );
}test commit
