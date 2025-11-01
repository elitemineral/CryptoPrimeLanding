import { Card, Icon, Link } from '../shared/ui';
import style from './scalpingTools.module.scss';

export function ScalpingTools() {
  return (
    <Card className={style.root} heading='Scalping Tools'>
      Инструменты скальпера
      <div className={style.tools}>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon className={style.arrow} type={Icon.types.bot} />
          Бот
        </Link>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon className={style.arrow} type={Icon.types.proxy} />
          Прокси
        </Link>
        <Link className={style.link} href='http://cryptoprime.com'>
          <Icon className={style.arrow} type={Icon.types.screen} />
          Скринер
        </Link>
      </div>
    </Card>
  );
}
