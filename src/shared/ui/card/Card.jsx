import classNames from 'classnames';
import style from './card.module.scss';

function Card({ className = undefined, heading, subheading = undefined }) {
  return (
    <div className={classNames(style.card, className)}>
      <h2 className={style.heading}>{heading}</h2>
      <p className={style.subheading}>{subheading}</p>
    </div>
  );
}

export default Card;
