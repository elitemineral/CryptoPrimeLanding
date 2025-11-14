import { useTranslation } from 'react-i18next';
import { Card, BtnLink } from '../../../shared/ui';
import style from './broker.module.scss';

export function Broker() {
  const { t } = useTranslation();

  return (
    <Card
      className={style.broker}
      description={t('broker.description')}
      heading={t('broker.heading')}
      subheading={t('broker.subheading')}
    >
      <BtnLink href='http://cryptoprime.com'>{t('broker.invite')}</BtnLink>
    </Card>
  );
}
