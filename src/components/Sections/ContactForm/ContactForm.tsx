// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef(null);

//   const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_odao7aw', 'template_obyqnrn', form.current, {
//         publicKey: 'sWhLa9wWGJbXmPfQ8',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
