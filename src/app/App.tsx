import { type FC } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/AppRouter';
import { Navbar } from 'widgets';

const App: FC = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className='content-page'>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
