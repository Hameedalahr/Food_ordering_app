import React from 'react'
import Header from './Header';

const Contact = () => {
  return (
    <div className="contact">
        <h1>24/7 AVAILABLE</h1>
        <form>
          <input type="text" className="form-inputs" placeholder="name"></input>
          <input type="text" className="form-inputs" placeholder="message"></input>
          <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact;
