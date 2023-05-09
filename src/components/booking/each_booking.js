import React from 'react';
import { useState, useEffect } from 'react';

import '../../style/each_booking.css';

import EditBooking from './edit_booking';

import {set, ref, remove} from 'firebase/database'

import {db} from "../../firebase";


function EachBooking(props) {

    const [edit_state, SetEdit_state] = useState(false);

    useEffect(() => {

    },[edit_state]);

    const edit_handler = () => {
        SetEdit_state(true);
    }

    const exit_edit_handler = () => {
        SetEdit_state(false);
    }

    const delete_handler = (id, date) => {
        remove(ref(db, `${date}/${id}`));
    }

  return(
    <div className='bookings_box'>
        {edit_state !== true? 
            <div className='each_booking_box'>
                <h3>Name: {props.name}</h3>
                <h3>Booking ID: {props.booking_id}</h3>
                <h3>Number of guests: {props.number_of_guests}</h3>
                <h3>Date: {props.date}</h3>
                <h3>Time: {props.time}</h3>
                <h3>Additional Requirements: {props.additional_requirements}</h3>
                <h3>Table: {props.table}</h3>
                <h3></h3>
                <div className='btn_box'>
                    <button onClick={() => edit_handler(props.booking_id)}>Edit</button>
                    <button onClick={() => delete_handler(props.booking_id, props.date)}>Delete</button>
                </div>
            </div>
            : 
            <EditBooking booking={props} exit_edit_handler={exit_edit_handler}></EditBooking>

        }
    </div>
  );
}

export default EachBooking;