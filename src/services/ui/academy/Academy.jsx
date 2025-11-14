import classNames from 'classnames';
import { Card, Icon, BtnLink } from '../../../shared/ui';
import style from './academy.module.scss';
import { useTranslation } from 'react-i18next';

export function Academy() {
  const { t } = useTranslation();

  return (
    <Card
      className={style.academy}
      description={t('academy.description')}
      heading={t('academy.heading')}
      subheading={t('academy.subheading')}
    >
      <BtnLink className={style.academyLink} href='http://cryptoprime.com'>
        {t('academy.education.trading')}
        <Icon className={style.arrow} type={Icon.types.arrow} />
      </BtnLink>
      <BtnLink
        className={classNames(style.academyLink, style.transparentLink)}
        href='http://cryptoprime.com'
      >
        {t('academy.education.investments')}
        <Icon type={Icon.types.arrow} />
      </BtnLink>
    </Card>
  );
}
