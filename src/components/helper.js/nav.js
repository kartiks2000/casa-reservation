import '../../style/nav.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site_title">Casa Americo Italian Bistro & Restuarant</Link>
            <ul>
                <li className='active'>
                    <Link to="/create_booking">Create Booking</Link>
                </li>
                <li>
                    <Link to="/all_bookings">All Booking</Link>
                </li>
            </ul>
        </nav>
    )
}