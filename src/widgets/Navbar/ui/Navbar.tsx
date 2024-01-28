import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon, LogoIcon } from 'shared/assets/icons';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={cls.header}>
      <div className={cls.headerLogoBlock}>
        <Link to={'/'}>
          <LogoIcon className={cls.headerLogo} />
        </Link>
        <div className={cls.headerCartIconBlock}>
          <Link to={'/cart'}>
            <div className={cls.headerCartIcon}>
              <CartIcon />
              <span className={cls.headerCartCounter}>14</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={cls.headerCategories}>
        <div className={cls.headerCategory}>Dresses</div>
        <div className={cls.headerCategory}>Pants’n’Shorts</div>
        <div className={cls.headerCategory}>Tops</div>
        <div className={cls.headerCategory}>Accessories</div>
      </div>
    </div>
  );
};

export default Navbar;
