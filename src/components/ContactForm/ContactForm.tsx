import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const form: React.RefObject<HTMLFormElement> = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    emailjs.sendForm('service_odao7aw', 'template_obyqnrn', form.current, { publicKey: 'sWhLa9wWGJbXmPfQ8', })
      .then(
        () => { console.log('SUCCESS!'); },
        (err) => { console.log('FAILED...', err); },
      );
  };

  return (
    <section className="contact flex-col">
      <div className="banner">
        <div className="info contact-text">
          <p>If you'd like to ask me something, contact me regarding a release or just have a chat about music in general, please contact me here:</p>
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex-col">
            <label className='flex-col'>name
              <input
                {...register('name', {
                  required: 'name is required',
                  minLength: {
                    value: 2,
                    message: 'please provide a name'
                  }
                })}
                type="text"
                name="name" />
                {errors.username && (
                  <span className="error-message">
                      {errors.username.message}
                  </span>
                )}
            </label>
            <label className='flex-col'>email
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'email is invalid'
                  }
                })}
                type="email"
                name="email" />
                {errors.email && (
                  <span className="error-message">
                    {errors.email.message}
                  </span>
                )}
            </label>
            <label className='flex-col'>message
              <textarea name="message" />
            </label>
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
