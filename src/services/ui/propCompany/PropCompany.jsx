import { useTranslation } from 'react-i18next';
import { LinkedCard } from '../../../shared/ui';
import style from './propCompany.module.scss';

export function PropCompany() {
  const { t } = useTranslation();

  return (
    <LinkedCard
      className={style.company}
      headingClassName={style.heading}
      heading={t('propCompany.heading')}
      subheading={t('propCompany.subheading')}
      href='http://cryptoprime.com'
    />
  );
}
