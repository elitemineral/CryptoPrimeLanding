import classNames from 'classnames';
import style from './link.module.scss';

export function Link({ children, className, href }) {
  return (
    <a
      className={classNames(style.link, className)}
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      {children}
    </a>
  );
}
