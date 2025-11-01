import { Card, Link } from '../shared/ui';
import style from './broker.module.scss';

export function Broker() {
  return (
    <Card
      className={style.root}
      heading='Брокер CryptoPrime'
      subheading='Безопасный брокер с расчётом в рублях'
    >
      <Link href='http://cryptoprime.com'>Начать торги</Link>
    </Card>
  );
}
