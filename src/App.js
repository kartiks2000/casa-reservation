import './App.css';

import CreateBooking from './components/booking/create_booking';
import AllBooking from './components/booking/all_bookings';

function App() {
  return (
    <div className="App">
      <CreateBooking></CreateBooking>
      {/* <AllBooking></AllBooking> */}
    </div>
  );
}

export default App;
