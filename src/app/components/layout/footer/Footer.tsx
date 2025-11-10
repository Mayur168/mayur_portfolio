import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'
import { FaEnvelope, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/footer-data')
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()        
          setfooterData(data?.footerData)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <footer className='xl:pt-2 pb-6'>
      <div className='container'>
        <hr />
        <div className='flex justify-center mt-4 gap-5'>
          <Link 
            href='mailto:mayurgaikwad1442@gmail.com' 
            className='flex gap-2 items-center space-x-2 text-dark_black/60 dark:text-white/60 hover:underline'
          >
            <FaEnvelope className='text-lg' />
            <span>Email</span>
          </Link>
          <Link 
            href='https://github.com/Mayur168' 
            className='flex gap-2 items-center space-x-2 text-dark_black/60 dark:text-white/60 hover:underline'
          >
            <FaGithub className='text-lg' />
            <span>GitHub</span>
          </Link>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer