import { Card, LinkedCard } from '../shared/ui';
import style from './company.module.scss';

export function Company() {
  return (
    <LinkedCard
      className={style.root}
      headingClassName={style.heading}
      heading='Проп-компания'
      subheading='Описание'
      href='http://cryptoprime.com'
    />
  );
}
