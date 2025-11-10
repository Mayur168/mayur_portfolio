


'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  user_name: string
  user_email: string
  message: string
}

interface FormErrors {
  user_name?: string
  user_email?: string
  message?: string
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: 'wwjvFzUTkENKC2Bh8', // Replace with your EmailJS public key
    })

    // Reset success/error message after 5 seconds
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
        if (submitStatus === 'success') {
          reset()
        }
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  // Validation function
  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!data.user_name.trim()) {
      newErrors.user_name = 'Name is required'
    } else if (data.user_name.length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters long'
    } else if (data.user_name.length > 50) {
      newErrors.user_name = 'Name cannot exceed 50 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.user_email.trim()) {
      newErrors.user_email = 'Email is required'
    } else if (!emailRegex.test(data.user_email)) {
      newErrors.user_email = 'Please enter a valid email address'
    }

    // Message validation
    if (!data.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (data.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (data.message.length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Validate the entire form on change to update errors in real-time
    const updatedFormData = {
      ...formData,
      [name]: value,
    }
    const newErrors = validateForm(updatedFormData)
    setErrors(newErrors)
  }

  const reset = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: '',
    })
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate the form
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    // If there are errors, prevent submission
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send form data using EmailJS
      await emailjs.sendForm(
        'service_ta1ua3j', // Replace with your EmailJS service ID
        'template_b3e077w', // Replace with your EmailJS template ID
        e.currentTarget,
        {
          publicKey: 'wwjvFzUTkENKC2Bh8', // Replace with your EmailJS public key
        }
      )
      setSubmitStatus('success')
    } catch (error) {
      console.error('Submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check if the form is valid to enable/disable the submit button
  const isFormValid = Object.keys(errors).length === 0 && Object.keys(validateForm(formData)).length === 0

  return (
    <section id="contact">
      <div className="relative w-full py-8 sm:py-12 lg:py-16 2xl:py-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="relative flex flex-col text-center items-center">
              <h2 className="font-medium w-full max-w-32">
                Love to hear from you, Get in
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {' '}
                  touch
                </span>
              </h2>
            </div>
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/20 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ix:success-filled"
                    width="30"
                    height="30"
                    style={{ color: '#79D45E' }}
                  />
                  <h5 className="text-green dark:text-green">
                    Form Submitted Successfully! We'll get in touch soon.
                  </h5>
                </div>
                <Link
                  href="/"
                  className="group w-fit text-black font-medium bg-transparent dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black"
                  onClick={reset}
                >
                  <span className="group-hover:translate-x-9 group-hover:dark:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out">
                    Back to home
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out group-hover:rotate-45"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                      className="transition-colors duration-200 ease-in-out fill-black"
                    />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200 ease-in-out stroke-white"
                    />
                  </svg>
                </Link>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-red/20 dark:bg-red/10">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ix:error-filled"
                    width="30"
                    height="30"
                    style={{ color: '#EF4444' }}
                  />
                  <h5 className="text-red-500 dark:text-red-400">
                    Submission Failed. Please try again later.
                  </h5>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="group w-fit text-black font-medium bg-transparent dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black"
                >
                  <span className="group-hover:translate-x-9 group-hover:dark:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out">
                    Try Again
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out group-hover:rotate-45"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                      className="transition-colors duration-200 ease-in-out fill-black"
                    />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200 ease-in-out stroke-white"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8"
              >
                <div className="flex flex-col md:flex md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="user_name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      className={`w-full mt-2 rounded-full border px-5 py-3 outline-none transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 ${
                        errors.user_name ? 'border-red-500' : ''
                      }`}
                      id="user_name"
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      disabled={isSubmitting}
                    />
                    {errors.user_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="user_email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      className={`w-full mt-2 rounded-full border px-5 py-3 outline-none transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 ${
                        errors.user_email ? 'border-red-500' : ''
                      }`}
                      id="user_email"
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                    />
                    {errors.user_email && (
                      <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    className={`w-full mt-2 rounded-3xl border px-5 py-3 outline-none transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know about your project"
                    rows={4}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <div>
                  {isSubmitting ? (
                    <button
                      type="button"
                      disabled
                      className="flex items-center gap-2 py-3 px-7 rounded-full bg-gray-400 text-white"
                    >
                      <div
                        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      Submitting...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`group w-fit text-white font-medium bg-dark_black dark:bg-white dark:text-dark_black rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out hover:bg-transparent border hover:text-dark_black border-dark_black ${
                        !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-10">
                        Let’s Collaborate
                      </span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="white"
                          className="fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black"
                        />
                        <path
                          d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                          stroke="#1B1D1E"
                          strokeWidth="1.42857"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm