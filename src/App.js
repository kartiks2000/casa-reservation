import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateBooking from './components/booking/create_booking';
import AllBooking from './components/booking/all_bookings';
import Layout from './components/helper/Layout';

function App() {
  return (
    // <div className="App">
    //   <CreateBooking></CreateBooking>
    //   {/* <AllBooking></AllBooking> */}
    // </div>
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
          <Route path="create_booking" element={<CreateBooking />} />
          <Route path="all_bookings" element={<AllBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
