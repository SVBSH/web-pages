import { Outlet } from 'react-router-dom';

import BasketContextProvider from './context/BasketContext';
import Header from './components/Header/Header';
import Footer from './Footer';
import PresentationHeadphones from './components/PresentationHeadphones/PresentationHeadphones';

function App() {
  return (
    <BasketContextProvider>
      <div className="text-sm  bg-black-3" style={{ overflowX: 'hidden' }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </BasketContextProvider>
  );
}

export default App;
