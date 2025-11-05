import classNames from 'classnames';
import style from './card.module.scss';

export function Card({
  children,
  className,
  contentClassName,
  description,
  heading,
  headingClassName,
  subheading,
}) {
  return (
    <div
      className={classNames(style.root, className, {
        [style.hasDescription]: description != null,
      })}
    >
      <h2 className={classNames(style.heading, headingClassName)}>{heading}</h2>
      {subheading && <p className={style.subheading}>{subheading}</p>}
      {description && <div className={style.description}>{description}</div>}
      {children && (
        <div className={classNames(style.content, contentClassName)}>
          {children}
        </div>
      )}
    </div>
  );
}
