import React, { useState } from 'react';
import Button from './Button';
import styles from './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [acknowledgement, setAcknowledgement] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message, acknowledgement })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <p>
        <label>
          Name:
          <input 
            type="text" 
            onChange={({ target }) => setName(target.value)}
            value={name}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Email:
          <input 
            type="text" 
            onChange={({ target }) => setEmail(target.value)}
            value={email}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Message:
          <input 
            type="text" 
            onChange={({ target }) => setMessage(target.value)}
            value={message}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Acknowledgement:
          <input 
            type="text" 
            onChange={({ target }) => setAcknowledgement(target.value)}
            value={acknowledgement}
          ></input>
        </label>
      </p>
      
      <Button />
    </form>
  );
}
