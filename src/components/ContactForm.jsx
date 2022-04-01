import React, { useState } from 'react';
import axios from 'axios';
import './css/contactform.css';
// import { useHistory, Link, useParams } from 'react-router-dom';

export const ContactForm = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  function createEntry(e) {
    e.preventDefault(e);

    const newEntry = {
      name,
      email,
      content,
    }

    axios.post("http://localhost:8000/api/calendar/create", newEntry)
      .then(res => {
        console.log(res.data);
        // history.push("/pirates/")
      })
      .catch(err => {
        const { errors } = err.response.data; // add .error if passing in an object with other things aside from errors
        const messages = Object.keys(errors).map(error => errors[error].message)
        console.log(messages);
        setErrors(messages);
      })
  }




  return (

    <div className="contact-form-container">
      <h3 className="contact-h3">Contact</h3>
      <form className='contact-form-form' onSubmit={createEntry}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        
          <label >Name:</label>
          <input className="form-control w-75" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <label>Email:</label>
          <input className="form-control w-75" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Message:</label>
          <textarea className="form-control w-75" value={content} onChange={(e) => setContent(e.target.value)} /><br />
          <button className="button">Send </button>
        
      </form>
    </div>
  )

}

export default ContactForm;


