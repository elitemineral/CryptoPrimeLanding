import classNames from 'classnames';
import style from './BtnLink.module.scss';
import { Link } from '../link/Link';

export function BtnLink({ children, className, href }) {
  return (
    <Link className={classNames(style.btnLink, className)} href={href}>
      {children}
    </Link>
  );
}
