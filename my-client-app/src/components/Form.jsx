import React, { useEffect, useState } from 'react';
import './Form.css';
import { Button } from './Button';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    contact: '',
    reason: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://joshualawson.rhody.dev/process_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
        credentials: 'include' 
      });

      const result = await response.text();
      setMessage(result);
    } catch (error) {
      setMessage('There was an error with the submission.');
    }
  };

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCA0gKkVCMdOnF4-lZ8J4XknR_dyCqtzfM&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.initMap = function () {
          new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.5909, lng: -71.2536 },
            zoom: 12,
          });
        };
      };
    };

    loadGoogleMaps();
  }, []);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="name-email">
        <div className="col4">
          <input
            className="form-input"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col4">
          <input
            className="form-input"
            id="email"
            name="email"
            placeholder="Email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col4">
        <input
          className="form-input"
          id="age"
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col4">
        <p>Preferred Contact Method:</p>
        <label>
          <input
            type="radio"
            name="contact"
            value="email"
            checked={formData.contact === 'email'}
            onChange={handleChange}
          />{' '}
          Email
        </label>
        <label>
          <input
            type="radio"
            name="contact"
            value="phone"
            checked={formData.contact === 'phone'}
            onChange={handleChange}
          />{' '}
          Phone
        </label>
      </div>

      <div className="col4">
        <p>Reason for Contact:</p>
        <select name="reason" value={formData.reason} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="support">Inquiry</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <textarea
        className="form-input3"
        name="message"
        placeholder="Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
      />

      <br />
      <div className="form-group">
        <Button className="btns" buttonStyle="outline" buttonSize="medium">
          Submit
        </Button>
      </div>

      {message && <p className="form-message">{message}</p>}

      <div
        id="map"
        style={{
          width: '50%',
          height: '400px',
          marginTop: '20px',
          marginLeft: '25%',
        }}
      ></div>
    </form>
  );
}

export default Form;
