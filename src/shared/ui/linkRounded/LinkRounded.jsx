import classNames from 'classnames';
import style from './linkRounded.module.scss';

export function LinkRounded({ children, className, href }) {
  return (
    <a
      className={classNames(style.root, className)}
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      {children}
    </a>
  );
}
