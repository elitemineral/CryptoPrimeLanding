import { useTranslation } from 'react-i18next';
import { Card, Icon, RoundLink } from '../../../shared/ui';
import style from './media.module.scss';

export function Media() {
  const { t } = useTranslation();

  return (
    <Card
      heading={t('media.heading')}
      className={style.media}
      contentClassName={style.content}
    >
      {media.map((type) => (
        <RoundLink className={style.mediaLink} key={type}>
          <Icon type={type} />
        </RoundLink>
      ))}
    </Card>
  );
}

const media = [
  Icon.types.facebook,
  Icon.types.linkedin,
  Icon.types.github,
  Icon.types.youtube,
];
