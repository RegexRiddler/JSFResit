// Dependencies //
import React from "react"

export default function ContactPage () {
  return (
    <main className="contact">
      <form className="contact__form">
        <input type="text" placeholder="Your name" required/>
        <input type="text" placeholder="Your phone number"/>
        <select defaultValue="general">
          <option value="enquiry">Enquiry</option>
          <option value="complaint">Complaint</option>
          <option value="Compliment">Compliment</option>
          <option value="general">General Message</option>
        </select>
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}