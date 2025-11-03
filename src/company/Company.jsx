import { Card, LinkedCard } from '../shared/ui';
import style from './company.module.scss';

export function Company() {
  return (
    <LinkedCard
      className={style.root}
      description='Криптовалю́та — разновидность цифровой валюты, учёт внутренних расчётных единиц которой обеспечивает децентрализованная платёжная система'
      headingClassName={style.heading}
      heading='Проп-компания'
      subheading='Описание'
      href='http://cryptoprime.com'
    />
  );
}
