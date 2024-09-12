import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Header from './Header';
import Notification from './Components/Notification';
import Footer from './Footer';
import Gallery from './Gallery';
import Services from './Services';

function App() {
  return (
    <BrowserRouter>
      <Notification message="Opening Soon!" />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
