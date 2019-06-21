// Dependencies //
import React, { useState } from "react"

// Components //
import FormSuccess from "../components/FormSuccess"

export default function ContactPage () {
  const [isValidated, setValidated] = useState(false)
  let [formData, setFormData] = useState({
    nameError: null,
    isName: null,
    phoneError: null,
    isPhone: null,
    messageError: null,
    isMessage: null
  })

  const validateName = (event) => {
    const re = /^([a-z\u00C0-\u00D6\u00D8-\u00DE]+[-']?)([a-z\u00DF-\u00F6\u00F8-\u00FF '&-]+) ([A-Za-z\u00C0-\u00D6\u00D8-\u00DE\u00DF-\u00F6\u00F8-\u00FF '&-]+)$/;

    (re.test(String(event.target.value).toLowerCase())) ? 
    setFormData({...formData, isName: true}) : 
    setFormData({...formData, isName: false})
  }

  const validatePhone = (event) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    // Valid Formats //
    // (123) 456-7890
    // (123)456-7890
    // 123-456-7890
    // 123.456.7890
    // 1234567890
    // +31636363634
    // 075-63546725

    (re.test(String(event.target.value))) ? 
    setFormData({...formData, isPhone: true}) : 
    setFormData({...formData, isPhone: false})
  }

  const validateMessage = (event) => {
    (event.target.value.length >= 40) ? 
    setFormData({...formData, isMessage: true}) : 
    setFormData({...formData, isMessage: false})
  }
  
  const FormValidator = (event) => {
    event.preventDefault()
    let scopedFormData = {...formData}
    if (!formData.isName) {
      scopedFormData.nameError = "Invalid name please avoid symbols or numbers."
    }

    if (formData.isPhone === false) {
      scopedFormData.phoneError = "Try again without any spaces."
    }

    if (!formData.isMessage) {
      scopedFormData.messageError = "The message must be at least 40 characters long."
    }

    if (formData.isName && formData.isMessage) {
      setValidated(true)
      return true
    }
    setFormData(scopedFormData)
  }
  
  return (
    <main className="contact">
      <form className="contact__form">
        {isValidated ? <FormSuccess /> : null}
        <h1>Contact us.</h1>
        <select defaultValue="general">
          <option value="enquiry">Enquiry</option>
          <option value="complaint">Complaint</option>
          <option value="Compliment">Compliment</option>
          <option value="general">General Message</option>
        </select>
        {formData.nameError ? <span>{formData.nameError}</span> : null}
        <input onChange={validateName} type="text" placeholder="Your full name (required)" />
        {formData.phoneError ? <span>{formData.phoneError}</span> : null}
        <input onChange={validatePhone} type="text" placeholder="Your phone number (optional)"/>
        {formData.messageError ? <span>{formData.messageError}</span> : null}
        <textarea onChange={validateMessage} placeholder="Your message (min 40 characters required)" ></textarea>
        <button onClick={FormValidator} type="submit">Send</button>
      </form>
    </main>
  )
}