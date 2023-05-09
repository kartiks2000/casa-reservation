import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateBooking from './components/booking/create_booking';
import AllBooking from './components/booking/all_bookings';
import Navbar from './components/helper.js/nav';

function App() {
  return (
    // <div className="App">
    //   <CreateBooking></CreateBooking>
    //   {/* <AllBooking></AllBooking> */}
    // </div>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
          <Route path="create_booking" element={<CreateBooking />} />
          <Route path="all_bookings" element={<AllBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
