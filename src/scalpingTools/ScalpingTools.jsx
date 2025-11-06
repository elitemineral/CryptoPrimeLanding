import { Card, Icon, Link } from '../shared/ui';
import style from './scalpingTools.module.scss';

export function ScalpingTools() {
  return (
    <Card
      className={style.scalpingTools}
      description='Криптовалю́та — разновидность цифровой валюты, учёт внутренних расчётных единиц которой обеспечивает децентрализованная платёжная система'
      heading='Scalping Tools'
      headingClassName={style.heading}
    >
      <div className={style.toolsHeading}>
        Инструменты скальпера
        <Icon className={style.arrow} type={Icon.types.arrow} />
      </div>
      <div className={style.tools}>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon type={Icon.types.bot} />
          Бот
        </Link>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon type={Icon.types.proxy} />
          Прокси
        </Link>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon type={Icon.types.screen} />
          Скринер
        </Link>
      </div>
    </Card>
  );
}
