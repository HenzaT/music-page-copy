import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const form: React.RefObject<HTMLFormElement> = useRef(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    emailjs.sendForm('service_odao7aw', 'template_obyqnrn', form.current, {
        publicKey: 'sWhLa9wWGJbXmPfQ8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  };

  return (
    <section className="contact flex-col">
      <div className="banner">
        <div className="info contact-text">
          <p>If you'd like to ask me something, contact me regarding a release or just have a chat about music in general, please contact me here:</p>
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex-col">
            <label>name</label>
            <input
              {...register('name', {
                required: true
              })}
              type="text"
              name="user_name" />
            <label>email</label>
            <input
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              })}
              type="email"
              name="user_email" />
            <label>message</label>
            <textarea name="message" />
            <input
              {...register('message', {
                required: true
              })}
              type="submit"
              value="Send" />
          </form>
        </div>
        <h1 className="main-header form-h1">contact</h1>
      </div>
    </section>
  );
};
