import { Academy } from '../academy/Academy';
import { Broker } from '../broker/Broker';
import { ScalpingTools } from '../scalpingTools/ScalpingTools';
import { Card } from '../shared/ui';
import style from './services.module.scss';

export function Services() {
  return (
    <section className={style.services}>
      <Broker />
      <Academy />
      <Card heading='Биржи' className={style.exchanges} />
      <Card heading='Медиа' className={style.media} />
      <ScalpingTools />
      <Card heading='Проп-компания' className={style.company} />
      <Card heading='Discord' className={style.discord} />
    </section>
  );
}
