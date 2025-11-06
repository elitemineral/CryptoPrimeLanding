import { LinkedCard } from '../shared/ui';
import style from './discord.module.scss';

export function Discord() {
  return (
    <LinkedCard
      className={style.discord}
      headingClassName={style.heading}
      heading='Discord'
      href='http://cryptoprime.com'
    />
  );
}
