import classNames from 'classnames';
import style from './linkBtn.module.scss';
import { Link } from '../link/Link';

export function LinkBtn({ children, className, href }) {
  return (
    <Link className={classNames(style.root, className)} href={href}>
      {children}
    </Link>
  );
}
