import Header from '../header/Header';
import Services from '../services/Services';

import style from './app.module.scss';
import '../shared/styles/normalize.css';
import '../shared/styles/fonts.module.scss';

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Services />
    </div>
  );
}

export default App;
