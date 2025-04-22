import React, { useState } from 'react'
import contactImage from '../../images/contactImage.png'
import axios from 'axios'

function GetIntouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setError(false)

    const { name, email, message } = formData

    if (!name || !email || !message) {
      setStatus("Please fill all the fields")
      setError(true)
      return
    }

    setLoading(true)

    try {
      await axios.post("http://localhost:8000/getintouch", formData)
      setStatus("Message sent successfully")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("Failed to send message")
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-6 px-[4%]" id="contact">
      <div className="flex items-center">
        <img src={contactImage} alt="contact-image" className="h-[600px] hidden sm:block object-contain" />
      </div>
      <div className="flex flex-1 px-[8%] py-[45px] items-center gap-2">
        <div className="flex flex-col items-start gap-10 flex-1 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <span className="text-[36px] font-medium text-black">Get in touch</span>
            <p className="text-[20px] font-normal text-black">
              Feel free to contact us and we will get back to you as soon as possible
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="h-[50px] px-[30px] w-full rounded-[10px] bg-[#E8E8E8] outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="h-[50px] px-[30px] w-full rounded-[10px] bg-[#E8E8E8] outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="How we can help?"
                onChange={handleChange}
                className="h-[200px] px-[30px] py-[13px] w-full rounded-[10px] bg-[#E8E8E8] outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[130px] h-[45px] bg-[#FABC3F] text-white rounded-[15px] flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          {status && (
            <p className={`mt-2 ${error ? 'text-red-600' : 'text-green-600'}`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default GetIntouch
