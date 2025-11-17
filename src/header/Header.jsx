import { useTranslation } from 'react-i18next';
import style from './header.module.scss';
import { LanguagePicker } from '../shared/ui';
import { useCallback } from 'react';

export function Header() {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  const hanldeChangeLanguage = useCallback(
    (lang) => {
      changeLanguage(lang);
    },
    [changeLanguage],
  );

  return (
    <header className={style.header}>
      <LanguagePicker onChange={hanldeChangeLanguage} value={language} />
      <h1 className={style.heading}>CryptoPrime</h1>
      <p className={style.subheading}>{t('header.subheading')}</p>
    </header>
  );
}
