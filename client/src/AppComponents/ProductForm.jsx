import React, { useState } from 'react';

export function FormComponent() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      'phone number': phoneNumber,
      suggestion: suggestion
    };

    // Send the form data to the server
    fetch('/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Response from the server
        // Do something with the response if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <p>Any products you wish to see here? Enter them in the suggestion form below!</p>
      <form onSubmit={handleSubmit} style={
          {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: '16px'
          }
        }>
        <input type='text' name='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='number' name='phone number' placeholder='Enter your phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <textarea placeholder='Your suggestions' value={suggestion} onChange={(e) => setSuggestion(e.target.value)} required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

