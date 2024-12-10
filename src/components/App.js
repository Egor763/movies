import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Register } from './Register/Register';

export function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
