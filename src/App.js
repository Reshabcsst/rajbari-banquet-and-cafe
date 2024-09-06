import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
