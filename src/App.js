import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import ContactUs from './components/ContactUsPage';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Shop from './components/Shop';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/shop" element={<Shop/>}></Route>
          <Route path = "/booking" element={<BookingPage/>}></Route>
          <Route path = "/contactus" element={<ContactUs/>}></Route>
          <Route path = "/purchase/*" element={<Purchase/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
