import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [message, setMessage] =useState("");
  const [loading, setLoading] =useState(false);
  return (
    <section className='contact'>
      <form>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Message</label>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type="submit" disabled={loading}>Send Message</button>
      </form>
    </section>
  )
}

export default Contact
