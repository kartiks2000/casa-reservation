import React from 'react';
import { useState, useEffect } from 'react';
import {set, ref, onValue} from 'firebase/database'
import {db} from "../../firebase";

import EachBooking from './each_booking';

import '../../style/all_bookings.css';

import {CSVLink} from 'react-csv';

function AllBooking() {

    const [bookings, setBookings] = useState([]);
    const [date_filter, setState_filter] = useState('');

    const headers=[
        {label: "Booking ID", key: "uuid"},
        {label: "Name", key: "name"},
        {label: "Number of guests", key: "number_of_guests"},
        {label: "Contact Number", key: "contact_number"},
        {label: "Date", key: "date"},
        {label: "Time", key: "time"},
        {label: "Email", key: "email"},
        {label: "Additional Requirements", key: "additional_requirements"},
        {label: "Table", key: "table"},
    ]

    useEffect(() => {
        console.log("Rendering...")
    }, [bookings]);

    const date_filter_handler = (e) => {
        e.preventDefault();
        onValue(ref(db, date_filter), snapshot => {
            const data = snapshot.val();
            if(data !== null) {
                var temp = Object.values(data)
                // console.log(temp)
                setBookings([...temp])
                console.log(bookings)
            }
            else{
                alert("No reservations for the given date....")
            }
        });
    }

    const csvLink = {
        filename: "reservations.csv",
        headers: headers,
        data: bookings
    }

    const export_handler = () => {
        if(date_filter !== null && bookings !== null){
            
        }
        else{
            alert("No data present.")
        }
    }

  return(
    <div>
        {/* {bookings.map((item)=> {
            console.log(item.name)
        })} */}
        <div className='filter_box'>
            <form onSubmit={date_filter_handler}>
                <input className='date_filter' type='date' required value={date_filter} onChange={(e) => setState_filter(e.target.value)} />
                <button className='filter_date_submit_btn' type='submit'>Filter</button> 
            </form>
            <button className='export_btn'><CSVLink {...csvLink}>Export reservations</CSVLink></button>
      </div>
      <div className='flex_container'>
        {
            bookings.map(item => {
                return <EachBooking key={item.uuid} booking_id={item.uuid} name={item.name} contact_number={item.contact_number} email={item.email} number_of_guests={item.number_of_guests} time={item.time} date={item.date} table={item.table} additional_requirements={item.additional_requirements}></EachBooking>
            })
        }
      </div>
    </div>
  );
}

export default AllBooking;