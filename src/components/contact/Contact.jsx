import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xboe939', 'template_lbk8bpe', form.current, 'JLRUo7gQWPukh2kKB');

    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>monirnasserie@gmail.com</h5>
            <a href="mailto:monirnasserie@gmail.com" target='_blank'>Send me an email!</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>monir-nasserie</h5>
            <a href="https://www.linkedin.com/in/monir-nasserie/" target='_blank'>Add me on LinkedIn!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact