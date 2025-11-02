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
      className={style.root}
      headingClassName={style.heading}
    >
      <div className={style.exchanges}>
        {media.map(({ name, src }) => (
          <LinkRounded key={name}>
            <img alt={name} className={style.exchange} src={src} />
          </LinkRounded>
        ))}
      </div>
    </Card>
  );
}

const media = [
  { name: 'binance', src: binance },
  { name: 'bybit', src: bybit },
  { name: 'bitget', src: bitget },
  { name: 'okx', src: okx },
];
