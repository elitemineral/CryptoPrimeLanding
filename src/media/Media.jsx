import { Card, Icon, LinkRounded } from '../shared/ui';
import style from './media.module.scss';

export function Media() {
  return (
    <Card heading='Медиа' className={style.root}>
      {media.map((type) => (
        <LinkRounded key={type}>
          <Icon type={type} />
        </LinkRounded>
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
