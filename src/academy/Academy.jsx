import classNames from 'classnames';
import { Card, Icon, Link } from '../shared/ui';
import style from './academy.module.scss';

export function Academy() {
  return (
    <Card
      className={style.root}
      heading='CryptoAcademy'
      subheading='школа обучения'
    >
      <Link className={style.link} href='http://cryptoprime.com'>
        Трейдинг
        <Icon className={style.arrow} type={Icon.types.arrow} />
      </Link>
      <Link
        className={classNames(style.link, style.transparent)}
        href='http://cryptoprime.com'
      >
        Инвестиции
        <Icon type={Icon.types.arrow} />
      </Link>
    </Card>
  );
}
