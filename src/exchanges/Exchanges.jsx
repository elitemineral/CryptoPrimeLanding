import { Card, LinkRounded } from '../shared/ui';
import style from './exchanges.module.scss';
import binance from '../shared/assets/images/binance.png';
import bybit from '../shared/assets/images/bybit.png';
import bitget from '../shared/assets/images/bitget.png';
import okx from '../shared/assets/images/okx.png';

export function Exchanges() {
  return (
    <Card
      heading='Биржи'
      className={style.exchanges}
      contentClassName={style.content}
      headingClassName={style.heading}
    >
      {media.map(({ name, src }) => (
        <LinkRounded className={style.exchangeItemLink} key={name}>
          <img alt={name} className={style.exchangeItem} src={src} />
        </LinkRounded>
      ))}
    </Card>
  );
}

const media = [
  { name: 'binance', src: binance },
  { name: 'bybit', src: bybit },
  { name: 'bitget', src: bitget },
  { name: 'okx', src: okx },
];
