import { Card } from '../shared/ui';
import style from './services.module.scss';

function Services() {
  return (
    <section className={style.services}>
      <Card
        heading='Брокер CryptoPrime'
        subheading='Безопасный брокер с расчётом в рублях'
        className={style.brokers}
      />
      <Card
        heading='CryptoAcademy'
        subheading='школа обучения'
        className={style.academy}
      />
      <Card heading='Биржи' className={style.exchanges} />
      <Card heading='Медиа' className={style.media} />

      <Card heading='Scalping Tools' className={style.tools} />
      <Card heading='Проп-компания' className={style.company} />
      <Card heading='Discord' className={style.discord} />
    </section>
  );
}

export default Services;
