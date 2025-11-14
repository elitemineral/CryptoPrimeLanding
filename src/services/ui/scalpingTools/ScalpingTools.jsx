import { useTranslation } from 'react-i18next';
import { Card, Icon, BtnLink } from '../../../shared/ui';
import style from './scalpingTools.module.scss';

export function ScalpingTools() {
  const { t } = useTranslation();

  return (
    <Card
      className={style.scalpingTools}
      description={t('scalpingTools.description')}
      heading={t('scalpingTools.heading')}
      headingClassName={style.heading}
    >
      <div className={style.toolsHeading}>
        {t('scalpingTools.toolsLabel')}
        <Icon className={style.arrow} type={Icon.types.arrow} />
      </div>
      <div className={style.tools}>
        <BtnLink className={style.toolsLink} href='http://cryptoprime.com'>
          <Icon type={Icon.types.bot} />
          {t('scalpingTools.tools.bot')}
        </BtnLink>
        <BtnLink className={style.toolsLink} href='http://cryptoprime.com'>
          <Icon type={Icon.types.proxy} />
          {t('scalpingTools.tools.proxy')}
        </BtnLink>
        <BtnLink className={style.toolsLink} href='http://cryptoprime.com'>
          <Icon type={Icon.types.screen} />
          {t('scalpingTools.tools.screener')}
        </BtnLink>
      </div>
    </Card>
  );
}
