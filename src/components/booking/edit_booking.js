import React from 'react';
import { useState, useEffect } from 'react';

import {set, ref} from 'firebase/database'

import {db} from "../../firebase";

import '../../style/each_booking.css';


function EditBooking(props) {

    const [name, setName] = useState(props.booking.name)
    const [number_of_guests, setNumber_of_guests] = useState(props.booking.number_of_guests)
    const [contact_number, setContact_number] = useState(props.booking.contact_number)
    const [email, setEmail] = useState(props.booking.email)
    const [date, setDate] = useState(props.booking.date)
    const [time, setTime] = useState(props.booking.time)
    const [additional_requirements, setAdditional_requirements] = useState(props.booking.additional_requirements)
    const [table, setTable] = useState(props.booking.table)


    const update_handler = (id, date) => {
        console.log("date=>", date);
        console.log("updating...");
        const booking_data = {
            'name': name,
            'number_of_guests': number_of_guests,
            'contact_number': contact_number,
            'email': email,
            'date': props.booking.date,
            'time': time,
            'additional_requirements': additional_requirements,
            'table': table
        }

        console.log(booking_data);
        console.log("id=>",id)
        try{
            set(ref(db, `${booking_data.date}/${id}`), {
            ...booking_data,
            uuid: id
          });
          }
          catch (err){
            console.log(err);
            alert("Sorry! couldnt update!")
          }
    }

  return(
    <div className='edit_box'>
        <input type="text" disabled className='edit_field' value={props.booking.booking_id}/>
        <input className='edit_field' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' required/>
        <input className='edit_field' value={contact_number} onChange={(e) => setContact_number(e.target.value)} type='number' placeholder='Contact Number' required/>
        <input className='edit_field' value={number_of_guests} onChange={(e) => setNumber_of_guests(e.target.value)} type='number' placeholder='Number of guests' required/>
        <input className='edit_field' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required/>
        <input className='edit_field' value={props.booking.date} type='date' required disabled/>
        <input className='edit_field' value={time} onChange={(e) => setTime(e.target.value)} type='time' required/>
        <textarea className='edit_field' onChange={(e) => setAdditional_requirements(e.target.value)} value={additional_requirements}/>
        <div className='form_entry'>
          <label>Table assigned</label>
          <select value={table} onChange={(e) => setTable(e.target.value)}>
            <option value="T1">T1</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
            <option value="T4">T4</option>
            <option value="T5">T5</option>
          </select> 
        </div>
        <button onClick={() => update_handler(props.booking.booking_id ,props.booking.date)}>Update</button>
    </div>
  );
}

export default EditBooking;