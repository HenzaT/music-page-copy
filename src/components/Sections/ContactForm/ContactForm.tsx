
export default function ContactForm() {
  const ContactForm = () => {
    return (
      <form action="" className="flex-col">
        <label htmlFor="first-name">Name</label>
        <input type="text" name="first-name" id="first-name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="message">Your Message</label>
        <input type="text" name="message" id="message" />

        <input type="submit" value="Submit" />
      </form>
    )
  }

  return (
    <div className="contact flex-col">
      <h1>GET IN TOUCH</h1>
      <p>If you'd like to get in touch regarding my music, you can send a message using this form</p>
      <ContactForm />
    </div>
  )
}
