import { Card, Link } from '../shared/ui';
import style from './broker.module.scss';

export function Broker() {
  return (
    <Card
      className={style.root}
      description='Криптовалю́та — разновидность цифровой валюты, учёт внутренних расчётных единиц которой обеспечивает децентрализованная платёжная система'
      heading='Брокер CryptoPrime'
      subheading='Безопасный брокер с расчётом в рублях'
    >
      <Link href='http://cryptoprime.com'>Начать торги</Link>
    </Card>
  );
}
