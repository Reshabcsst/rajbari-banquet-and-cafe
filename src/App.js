import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Notification from './Components/Notification';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import ScrollToTopOnPathChange from './Components/ScrollToTopOnPathChange';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnPathChange />
      <Notification message="Opening Soon!" />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
