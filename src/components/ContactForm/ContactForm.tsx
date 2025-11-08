import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 992px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 991px)' })

  const onSubmit = () => {
    emailjs.sendForm('service_odao7aw', 'template_obyqnrn', form.current, { publicKey: 'sWhLa9wWGJbXmPfQ8', })
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setButtonDisabled(true);
          // response.status(400).send({ message: 'message sent' });
        },
        function (error) {
          console.log('FAILED...', error);
        }
      )
  };

  const contactText = () => (
    <p>
      If you'd like to ask me something, contact me regarding a release or just have a chat
      about music in general, please contact me here.
    </p>
  )

  return (
    <section className="contact flex-col">
      <div className="banner">
        <div className="info contact-text">
          {isMobileScreen && contactText()}
          <form className="flex-col" ref={form} onSubmit={handleSubmit(onSubmit)}>
            <label>name
              {errors.name?.message && (
              <span className="error-message">
                {errors.name?.message}
              </span>
              )}
            </label>
            <input
              {...register('name', {
                required: 'name is required',
                minLength: {
                  value: 2,
                  message: 'please provide a name'
                }
              })}
              type="text"
              name="name"
              placeholder="aptist"
              required
              aria-required="true"
            />
            <label>email
              {errors.email?.message && (
              <span className="error-message">
                {errors.email.message}
              </span>
              )}
            </label>
            <input
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'email is invalid'
                }
              })}
              type="email"
              name="email"
              placeholder="name@example.com"
              required
              aria-required="true"
            />
            <label>message
              {errors.message?.message && (
              <span className="error-message">
                {errors.message.message}
              </span>
              )}
            </label>
            <textarea
            {...register('message', {
              required: 'message is required'
            })}
              name="message"
              placeholder='Write your message here'
              required
              aria-required="true"
            />
            <input
              type="submit"
              aria-label="submit button"
              disabled={buttonDisabled}
              value={buttonDisabled ? 'Message Sent!' : 'Send'}
            />
          </form>
          {isTabletAndBiggerScreen && contactText()}
        </div>
        <h1 className="main-header form-h1">contact</h1>
      </div>
    </section>
  );
};
