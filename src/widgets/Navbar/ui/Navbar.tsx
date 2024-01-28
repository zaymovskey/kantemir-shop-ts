import { type FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon, LogoIcon } from 'shared/assets/icons';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = () => {
  const navBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (navBarRef.current == null) {
      return;
    }
    const navBarHeight = navBarRef.current.clientHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navBarHeight}px`);
  }, [navBarRef]);

  return (
    <header className={cls.Navbar} ref={navBarRef}>
      <nav className={cls.topNav}>
        <ul className={cls.topNav__list}>
          <li className={cls.topNav__listElement}>
            <Link to={'/'} aria-label={'Главная'}>
              <LogoIcon className='hoverSvg' />
            </Link>
          </li>
          <li className={cls.topNav__listElement}>
            <Link to={'/cart'} aria-label={'Корзина'}>
              <div className={cls.topNav__cart}>
                <CartIcon />
                <span className={cls.topNav__cartCounter}>14</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={cls.bottomNav}>
        <ul className={cls.bottomNav__list}>
          <li className={cls.bottomNav__listElement}>
            <a href='#' className={'hoverText'}>
              Dresses
            </a>
          </li>
          <li className={cls.bottomNav__listElement}>
            <a href='#' className={'hoverText'}>
              Pants’n’Shorts
            </a>
          </li>
          <li className={cls.bottomNav__listElement}>
            <a href='#' className={'hoverText'}>
              Tops
            </a>
          </li>
          <li className={cls.bottomNav__listElement}>
            <a href='#' className={'hoverText'}>
              Accessories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
