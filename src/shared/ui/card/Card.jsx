import style from './card.module.scss';

function Card({ heading, subheading = undefined }) {
  return (
    <div className={style.card}>
      <h2 className={style.heading}>{heading}</h2>
      <p className={style.subheading}>{subheading}</p>
    </div>
  );
}

export default Card;
