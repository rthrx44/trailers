import './styles/index.css';
import './styles/App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 4500);
  });
  return (
    <>        
      {showLoading && <Loading/>}
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
