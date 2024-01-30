import { type FC } from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets';
import { AppRouter } from './providers/AppRouter';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <main className='content-page'>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
