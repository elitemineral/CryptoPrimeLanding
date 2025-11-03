import style from './linkedCard.module.scss';
import { Icon } from '../icons/Icon';
import { Card } from '../card/Card';

export function LinkedCard({
  className,
  description,
  heading,
  headingClassName,
  href,
  subheading,
}) {
  return (
    <Card
      className={className}
      contentClassName={style.content}
      description={description}
      heading={heading}
      headingClassName={headingClassName}
      subheading={subheading}
    >
      <a className={style.link} href={href} rel='noreferrer' target='_blank' />
      <Icon type={Icon.types.arrowUpRight} />
    </Card>
  );
}
