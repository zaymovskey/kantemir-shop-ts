import { type FC } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/AppRouter';
import { Navbar } from 'widgets';

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
