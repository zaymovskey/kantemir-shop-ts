import { type FC } from 'react';
import {
  LogoIcon,
  ILoveUIcon,
  InstagramIcon,
  WhatsappIcon,
  TelegramIcon
} from 'shared/assets/icons';
import cls from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => {
  return (
    <footer className={cls.Footer}>
      <div className={cls.Footer__item}>
        <p className={cls.Footer__itemText}>Delivery information</p>
        <p className={cls.Footer__ItemText}>Delivery information</p>
      </div>
      <div className={`${cls.Footer__item} ${cls.footerLogos}`}>
        <LogoIcon className={cls.FooterLogo} />
        <ILoveUIcon className={cls.FooterLogo} />
      </div>
      <div className={cls.Footer__item}>
        <ul className={cls.Footer__iconsList}>
          <li className={cls.Footer__iconsListItem}>
            <a
              href='https://instagram.com/_u/zaymovskey/'
              className={cls.Footer__iconsListItem}
              aria-label={'Инстаграм'}
              target='_blank'
              rel='noreferrer'
            >
              <InstagramIcon />
            </a>
          </li>
          <li className={cls.Footer__iconsListItem}>
            <a
              href='https://wa.me/79096799833'
              className={cls.Footer__iconsListItem}
              aria-label={'Вотсап'}
              target='_blank'
              rel='noreferrer'
            >
              <WhatsappIcon />
            </a>
          </li>
          <li className={cls.Footer__iconsListItem}>
            <a
              href='https://t.me/krovoshod'
              className={cls.Footer__iconsListItem}
              aria-label={'Телеграм'}
              target='_blank'
              rel='noreferrer'
            >
              <TelegramIcon />
            </a>
          </li>
        </ul>
        <div>
          <p className={cls.Footer__itemText}>Prod. by Sri-Lanka</p>
          <p className={cls.Footer__itemText}>Worldwide delivery</p>
        </div>
      </div>
    </footer>
  );
};
