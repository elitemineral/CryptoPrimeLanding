import classNames from 'classnames';
import { Card, Icon, BtnLink } from '../../../shared/ui';
import style from './academy.module.scss';

export function Academy() {
  return (
    <Card
      className={style.academy}
      description='Криптовалю́та — разновидность цифровой валюты, учёт внутренних расчётных единиц которой обеспечивает децентрализованная платёжная система'
      heading='CryptoAcademy'
      subheading='школа обучения'
    >
      <BtnLink className={style.academyLink} href='http://cryptoprime.com'>
        Трейдинг
        <Icon className={style.arrow} type={Icon.types.arrow} />
      </BtnLink>
      <BtnLink
        className={classNames(style.academyLink, style.transparentLink)}
        href='http://cryptoprime.com'
      >
        Инвестиции
        <Icon type={Icon.types.arrow} />
      </BtnLink>
    </Card>
  );
}
