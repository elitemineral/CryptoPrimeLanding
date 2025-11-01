import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.heading}>CryptoPrime</h1>
      <p className={style.subheading}>доступные инвестиции</p>
    </header>
  );
}
