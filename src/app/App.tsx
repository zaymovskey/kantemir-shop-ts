import { type FC } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/AppRouter';
import { Navbar } from 'widgets';

const App: FC = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='content-page'>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
