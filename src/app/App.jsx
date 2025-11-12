import { Header } from '../header/Header';
import { Services } from '../services';

import style from './app.module.scss';
import '../shared/styles/reset.css';
import '../shared/styles/fonts.scss';

import '../shared/i18n';

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Services />
    </div>
  );
}
