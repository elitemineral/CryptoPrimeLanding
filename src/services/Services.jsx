import { Academy } from '../academy/Academy';
import { Broker } from '../broker/Broker';
import { ScalpingTools } from '../scalpingTools/ScalpingTools';
import { Exchanges } from '../exchanges/Exchanges';
import { Media } from '../media/Media';
import { Company } from '../company/Company';
import { Discord } from '../discord/Discord';
import style from './services.module.scss';

export function Services() {
  return (
    <section className={style.services}>
      <Broker />
      <Academy />
      <Exchanges />
      <Media />
      <ScalpingTools />
      <Company />
      <Discord />
    </section>
  );
}
