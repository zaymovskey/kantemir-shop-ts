import { type FC } from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets';
import { Footer } from 'widgets/Footer/Footer';
import { AppRouter } from './providers/AppRouter';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <main className='content-page'>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
