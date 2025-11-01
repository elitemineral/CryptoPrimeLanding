import classNames from 'classnames';
import style from './card.module.scss';

export function Card({
  children,
  className,
  heading,
  subheading,
}) {
  return (
    <div className={classNames(style.card, className)}>
      <h2 className={style.heading}>{heading}</h2>
      {subheading && <p className={style.subheading}>{subheading}</p>}
      {children && <div className={style.content}>{children}</div>}
    </div>
  );
}
