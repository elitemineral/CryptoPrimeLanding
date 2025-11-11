import { Card, BtnLink } from '../shared/ui';
import style from './broker.module.scss';

export function Broker() {
  return (
    <Card
      className={style.broker}
      description='Криптовалю́та — разновидность цифровой валюты, учёт внутренних расчётных единиц которой обеспечивает децентрализованная платёжная система'
      heading='Брокер CryptoPrime'
      subheading='Безопасный брокер с расчётом в рублях'
    >
      <BtnLink href='http://cryptoprime.com'>Начать торги</BtnLink>
    </Card>
  );
}
