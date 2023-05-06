import React from 'react';
import { useState } from 'react';

function CreateBooking() {
  const [name, setName] = useState('')
  const [number_of_guests, setNumber_of_guests] = useState(0)
  const [contact_number, setContact_number] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [additional_requirements, setAdditional_requirements] = useState('')
  const [table, setTable] = useState('')

  const handle_submit = (e) => {
    e.preventDefault();
    const booking_data = {
      'name': name,
      'number_of_guests': number_of_guests,
      'contact_number': contact_number,
      'email': email,
      'date': date,
      'time': time,
      'additional_requirements': additional_requirements,
      'table': table
    }
    console.log(booking_data)
  }

  return(
    <div>
      <form onSubmit={handle_submit}>
        <div className='form_entry'>
          <label>Guest Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Total number of guests</label>
          <input type="number" value={number_of_guests} onChange={(e)=> setNumber_of_guests(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Contact Number</label>
          <input type="text" value={contact_number} onChange={(e) => setContact_number(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required/>
        </div>
        <div className='form_entry'>
          <label>Additional Requirements</label>
          <textarea placeholder='Please type any additional information...' value={additional_requirements} onChange={(e) => setAdditional_requirements(e.target.value)}/>
        </div>
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
        <button>Create Booking</button>
      </form>
    </div>
  );
}

export default CreateBooking;