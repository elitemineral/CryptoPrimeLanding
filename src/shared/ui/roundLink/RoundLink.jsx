import classNames from 'classnames';
import style from './roundLink.module.scss';
import { Link } from '../link/Link';

export function RoundLink({ children, className, href }) {
  return (
    <Link
      className={classNames(style.roundLink, className)}
      href={href}
    >
      {children}
    </Link>
  );
}
