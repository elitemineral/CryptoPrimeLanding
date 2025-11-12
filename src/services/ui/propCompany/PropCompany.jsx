import { LinkedCard } from '../../../shared/ui';
import style from './propCompany.module.scss';

export function PropCompany() {
  return (
    <LinkedCard
      className={style.company}
      headingClassName={style.heading}
      heading='Проп-компания'
      subheading='Описание'
      href='http://cryptoprime.com'
    />
  );
}
