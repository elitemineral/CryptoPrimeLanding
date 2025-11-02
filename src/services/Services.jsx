import { Academy } from '../academy/Academy';
import { Broker } from '../broker/Broker';
import { ScalpingTools } from '../scalpingTools/ScalpingTools';
import { Card } from '../shared/ui';
import { Exchanges } from '../exchanges/Exchanges';
import style from './services.module.scss';
import { Media } from '../media/Media';

export function Services() {
  return (
    <section className={style.services}>
      <Broker />
      <Academy />
      <Exchanges />
      <Media />
      <ScalpingTools />
      <Card
        heading='Проп-компания'
        subheading='Описание'
        className={style.company}
      />
      <Card heading='Discord' className={style.discord} />
    </section>
  );
}
