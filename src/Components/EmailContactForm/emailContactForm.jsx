import React from 'react';
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const EmailContactForm = ({currentUser}) => {
    const {email} = currentUser;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3ov28jj', 'template_psd3qo7', e.target, 'user_AUMUh4EYkrvWv50ynhpxX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <React.Fragment>
                <form onSubmit={sendEmail}>
                    <div>
                        <label>To Board Admin:</label>
                <input name="to_email"  className="form-control"></input>
                </div>
                <div>
                    <label>From Email</label>
                    <input defaultValue={email} className="form-control" name="from_email" readOnly></input>
                </div>
                <div>
                <label>Message:</label>
                <input name="message" className="form-control mt-2"></input>
            </div>
                <Button className="mt-2" type="submit">Send Email</Button>
            </form>
        </React.Fragment>
    )
}

export default EmailContactForm;