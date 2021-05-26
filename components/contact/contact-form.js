import {useRef, useState, useEffect} from 'react';
import classes from "./contact-form.module.css";
import Notification from '../ui/notification';
import axios from 'axios';

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();
    const [documentReady, setDocumentReady] = useState(false);
    useEffect(() => {
        setDocumentReady(true);
        if (requestStatus === 'pending' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);


    const sendMessageHandler = (e) => {
        e.preventDefault();

        setRequestStatus('pending');

        axios.post('/api/contact', {
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        })
        .then(res => {
            setRequestStatus('success');

            setEnteredEmail("");
            setEnteredName("");
            setEnteredMessage("");
        })
        .catch((err) => {
            console.log(err);
            setRequestStatus('error');
            setRequestError(err);
        });

        console.log(enteredEmail, enteredName, enteredMessage);
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    } else if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully'
        }
    } else if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return (
        <section className={classes.contact}>
          <h1>How can I help you?</h1>
          <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  id='email'
                  required
                  value={enteredEmail}
                  onChange={(event) => setEnteredEmail(event.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input
                  type='text'
                  id='name'
                  required
                  value={enteredName}
                  onChange={(event) => setEnteredName(event.target.value)}
                />
              </div>
            </div>
            <div className={classes.control}>
              <label htmlFor='message'>Your Message</label>
              <textarea
                id='message'
                rows='5'
                required
                value={enteredMessage}
                onChange={(event) => setEnteredMessage(event.target.value)}
              ></textarea>
            </div>
    
            <div className={classes.actions}>
              <button>Send Message</button>
            </div>
          </form>
          {documentReady && notification && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
        </section>
      );
}

export default ContactForm
