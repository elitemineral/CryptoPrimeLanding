import { Header } from '../header/Header';
import { Services } from '../services/Services';

import style from './app.module.scss';
import '../shared/styles/reset.css';
import '../shared/styles/fonts.scss';

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Services />
    </div>
  );
}
