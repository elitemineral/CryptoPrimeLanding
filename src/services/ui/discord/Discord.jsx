import { useTranslation } from 'react-i18next';
import { LinkedCard } from '../../../shared/ui';
import style from './discord.module.scss';

export function Discord() {
  const { t } = useTranslation();

  return (
    <LinkedCard
      className={style.discord}
      headingClassName={style.heading}
      heading={t('discord.heading')}
      href='http://cryptoprime.com'
    />
  );
}
