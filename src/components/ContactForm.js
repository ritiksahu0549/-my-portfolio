import React, { useMemo, useState } from 'react';
import { postJSON } from '../api/client';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const endpoint = useMemo(() => {
    // Replace later with your MERN backend endpoint
    // Example: 'http://localhost:5000/api/contact'
    return 'https://example.com/api/contact';
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    const payload = { name, email, message };

    setStatus({ state: 'loading', msg: 'Sending...' });
    try {
      await postJSON(endpoint, payload);
      setStatus({ state: 'success', msg: 'Message sent successfully ✅' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      // For now we show UI error; endpoint is placeholder.
      setStatus({ state: 'error', msg: err?.message || 'Failed to send message' });
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit} data-sr>
      <div className="formRow">
        <label className="label">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label className="label">
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>

      <label className="label">
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required />
      </label>

      <div className="contactActions">
        <button className="btn btnPrimary" type="submit" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        <div
          className={`formStatus ${status.state}`}
          role={status.state === 'error' ? 'alert' : 'status'}
        >
          {status.msg}
        </div>
      </div>

      <div className="contactHint">
        MERN-ready UI: change <code>endpoint</code> in <code>ContactForm.js</code> to your backend.
      </div>
    </form>
  );
}

