import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  // form-related
  const form = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  // media queries
  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 992px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 991px)' })
  // recaptcha-related
  const recaptchaSiteKey = String(import.meta.env.VITE_SITE_KEY);
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const onSubmit = async () => {
    if (!form.current) {
      console.warn('Contact form not mounted');
      return;
    }

    if (!captchaRef.current) {
      console.warn('reCAPTCHA not ready');
      return;
    }

    try {
      const token = await captchaRef.current.executeAsync();

      if (!token) {
        console.warn('Please complete the reCAPTCHA');
        return;
      }

      const hiddenInput = form.current.querySelector<HTMLInputElement>('input[name="g-recaptcha-response"]');
      if (hiddenInput) {
        hiddenInput.value = token;
      } else {
        console.warn('Hidden reCAPTCHA input not found on the form');
      }

      const response = await emailjs.sendForm(
        'service_odao7aw',
        'template_obyqnrn',
        form.current,
        { publicKey: 'sWhLa9wWGJbXmPfQ8' }
      );
      console.log('SUCCESS!', response.status, response.text);
      setButtonDisabled(true);
    } catch (error) {
      console.error('FAILED...', error);
    } finally {
      captchaRef.current.reset();
    }
  };


  const contactText = () => (
    <p>
      If you'd like to contact me regarding a release or just have a chat
      about music in general, please contact me here.
    </p>
  )

  type FieldError = string | { message?: string } | null | undefined
  const renderError = (field: FieldError) => {
    if (!field) return null;
    if (typeof field === 'string') return field;
    if (typeof field === 'object' && 'message' in field) return field.message;
    return null;
  };

  return (
    <section className="contact flex-col">
      <div className="banner">
        <div className="info contact-text">
          {isMobileScreen && contactText()}
          <form className="flex-col" ref={form} onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
            <label>name
              {renderError(errors.name) && (
              <span className="error-message">
                {renderError(errors.name)}
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
              {renderError(errors.email) && (
              <span className="error-message">
                {renderError(errors.email)}
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
              {renderError(errors.message) && (
              <span className="error-message">
                {renderError(errors.message)}
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
            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              ref={captchaRef}
              size="invisible"
            />
            <input type="hidden" name="g-recaptcha-response" />
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
