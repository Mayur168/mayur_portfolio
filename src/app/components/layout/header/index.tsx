// 'use client'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { signOut, useSession } from 'next-auth/react'
// import { Icon } from '@iconify/react/dist/iconify.js'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import HeaderLink from './Navigation/HeaderLink'
// import { headerData } from './Navigation/Menudata'
// import Logo from './Logo'
// import MobileHeader from './Navigation/MobileHeader'
// import ThemeToggler from './ThemeToggle'

// const Header = () => {
//   const { data: session } = useSession()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [user, setUser] = useState<{ user: any } | null>(null)
//   const [sticky, setSticky] = useState(false)
//   const pathname = usePathname()

//   const handleScroll = () => {
//     setSticky(window.scrollY >= 80)
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [pathname])

//   const handleSignOut = () => {
//     localStorage.removeItem('user')
//     signOut()
//     setUser(null)
//   }

//   return (
//     <>
//       <header className={`fixed top-0 z-50 w-full`}>
//         <div className='container p-3'>
//           <nav
//             className={`flex items-center py-3 px-4 justify-between ${sticky
//                 ? ' rounded-full shadow-sm bg-white dark:bg-dark_black'
//                 : null
//               } `}>
//             <div className='flex items-center'>
//               <Link href="/#hero">
//                 {/* <Logo /> */}
//                 <h5>Mayur</h5>
//               </Link>
//             </div>
//             <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1'>
//               <ul className='flex gap-0 2xl:gap-1.5'>
//                 {headerData.map((item, index) => (
//                   <HeaderLink key={index} item={item} />
//                 ))}
//               </ul>
//             </div>
//             <div className='flex items-center gap-1 xl:gap-4'>
//               {/* ---------------------SignUp SignIn Button-----------------  */}
//               {user?.user || session?.user ? (
//                 <div className=''>
//                   {/* <button
//                     onClick={() => handleSignOut()}
//                     className='flex group font-normal items-center gap-1 transition-all duration-200 ease-in-out text-white px-4 py-2 bg-dark_black dark:bg-white/15 rounded-full hover:text-dark_black hover:bg-white dark:hover:bg-white/5 dark:hover:text-white border border-dark_black'>
//                     Sign Out
//                     <Icon icon='solar:logout-outline' width='25' height='25' />
//                   </button> */}
//                   {/* <div className='relative group'>
//                     <Image
//                       src='/images/home/avatar_1.jpg'
//                       alt='Image'
//                       width={40}
//                       height={40}
//                       quality={100}
//                       className='rounded-full cursor-pointer'
//                     />
//                     <p className='absolute w-fit text-sm text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-white/5 text-dark_black/60 p-1 min-w-28 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3'>
//                       {user?.user || session?.user?.name}
//                     </p>
//                   </div> */}
//                 </div>
//               ) : (
//                 <div className='flex items-center gap-2'>
//                   {/* <Link
//                     href={'/signin'}
//                     className='hidden lg:block bg-transparent border border-dark_black dark:border-white/50 text-primary px-2.5 xl:px-4 py-2 rounded-full hover:bg-dark_black hover:text-white'>
//                     Sign In
//                   </Link> */}
//                   {/* <Link
//                     href={'/signup'}
//                     className='hidden lg:block text-white px-2.5 xl:px-4 py-2  bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90'>
//                     Sign Up
//                   </Link> */}
//                 </div>
//               )}

//               {/* ---------------------Light/Dark Mode button-------------------- */}
//               <ThemeToggler />

//               <div className='hidden max-lg:flex'>
//                 <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     width='24'
//                     height='24'
//                     viewBox='0 0 24 24'>
//                     <path
//                       fill='none'
//                       stroke='currentColor'
//                       strokeLinecap='round'
//                       strokeMiterlimit='10'
//                       strokeWidth='1.5'
//                       d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* ------------------------- Mobile sidebar starts ------------------------- */}
//         {sidebarOpen && (
//           <div
//             className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}
//         <div
//           className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
//             } z-50`}>
//           <div className='flex items-center justify-between p-4'>
//             <h2 className='text-lg font-bold'>Menu</h2>
//             <button
//               onClick={() => setSidebarOpen(false)}
//               aria-label='Close mobile menu'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 width='24'
//                 height='24'
//                 viewBox='0 0 24 24'>
//                 <path
//                   fill='none'
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className='p-4'>
//             <ul className='flex flex-col'>
//               {headerData.map((item, index) => (
//                 <MobileHeader key={index} item={item} />
//               ))}
//               <div className='flex flex-col items-center gap-3 px-2 mt-2'>
//                 {user || session?.user ? (
//                   <>
//                     <button
//                       onClick={() => signOut()}
//                       className='flex w-full group font-normal items-center gap-2 transition-all duration-200 ease-in-out text-white dark:text-dark_black px-4 py-2 bg-dark_black rounded-md hover:text-dark_black hover:bg-white border border-dark_black'>
//                       Sign Out
//                       <Icon
//                         icon='solar:logout-outline'
//                         width='25'
//                         height='25'
//                       />
//                     </button>
//                     {/* <div className='group flex gap-2 items-center w-full border border-dark_black dark:border-white px-4 py-2 rounded-md hover:bg-dark_black transition-all duration-200 ease-in-out'>
//                       <Image
//                         src='/images/home/avatar_1.jpg'
//                         alt='Image'
//                         width={25}
//                         height={25}
//                         quality={100}
//                         className='rounded-full cursor-pointer'
//                       />
//                       <p className='group-hover:text-white text-dark_black dark:text-white w-full capitalize'>
//                         {user?.user?.email || session?.user?.name}
//                       </p>
//                     </div> */}
//                   </>
//                 ) : (
//                   <>
//                     <Link
//                       href={'/signin'}
//                       className='w-full border border-dark_black dark:border-white text-primary px-4 py-2 rounded-md hover:bg-dark_black dark:hover:bg-white hover:text-white dark:hover:text-dark_black'>
//                       Sign In
//                     </Link>
//                     <Link
//                       href={'/signup'}
//                       className='w-full text-white dark:text-dark_black px-4 py-2 bg-dark_black dark:bg-white rounded-md hover:opacity-90'>
//                       Sign Up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </ul>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header

'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'

// Define TypeScript interface for user
interface User {
  email?: string
  name?: string
}

const Header = () => {
  const { data: session } = useSession()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const handleSignOut = () => {
    localStorage.removeItem('user')
    signOut()
    setUser(null)
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`
              flex items-center justify-between py-3 px-4 sm:px-6 
              ${sticky
                ? 'rounded-full shadow-md bg-white dark:bg-gray-900'
                : 'bg-transparent'
              }
            `}
          >
            <div className="flex items-center">
              <Link href="/#hero">
                {/* <Logo /> */}
                <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Mayur
                </h5>
              </Link>
            </div>
            <div className="hidden lg:flex bg-gray-100/50 dark:bg-gray-800/50 rounded-full py-2 px-1">
              <ul className="flex gap-1 sm:gap-2 lg:gap-3">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Authenticated User Actions */}
              {(user || session?.user) && (
                <div className="hidden lg:flex items-center gap-3">
                  <button
                    onClick={handleSignOut}
                    className="
                      flex items-center gap-2 text-sm sm:text-base font-medium 
                      px-3 sm:px-4 py-2 rounded-full 
                      bg-gray-900 text-white dark:bg-white/20 dark:text-white 
                      border border-gray-900 dark:border-white/50 
                      hover:bg-white hover:text-gray-900 
                      dark:hover:bg-gray-800 dark:hover:text-white 
                      active:bg-gray-200 dark:active:bg-gray-700 
                      transition-all duration-200
                    "
                  >
                    Sign Out
                    <Icon icon="solar:logout-outline" width="20" height="20" />
                  </button>
                  <div className="relative group">
                    <Image
                      src="/images/home/avatar_1.jpg"
                      alt="User Avatar"
                      width={36}
                      height={36}
                      quality={100}
                      className="rounded-full cursor-pointer"
                    />
                    <p
                      className="
                        absolute w-fit text-xs sm:text-sm text-center 
                        invisible opacity-0 group-hover:visible group-hover:opacity-100 
                        transition-opacity duration-200 
                        bg-white dark:bg-gray-800 text-gray-600 dark:text-white/60 
                        p-2 min-w-32 rounded-lg shadow-lg 
                        top-full left-1/2 transform -translate-x-1/2 mt-2
                      "
                    >
                      {user?.name || session?.user?.name || user?.email || session?.user?.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Theme Toggler */}
              <ThemeToggler />

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  aria-label="Toggle mobile menu"
                  className="p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-gray-900 dark:text-white"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`
            lg:hidden fixed top-0 right-0 h-full w-4/5 sm:w-3/5 max-w-sm 
            bg-white dark:bg-gray-900 shadow-lg 
            transform transition-transform duration-300 
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-50
          `}
        >
          <div className="flex items-center justify-between p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Menu
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close mobile menu"
              className="p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-gray-900 dark:text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 sm:p-5">
            <ul className="flex flex-col gap-2">
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
              {(user || session?.user) && (
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={handleSignOut}
                    className="
                      flex w-full items-center justify-center gap-2 
                      text-base font-medium 
                      px-4 py-3 rounded-md 
                      bg-gray-900 text-white dark:bg-white dark:text-gray-900 
                      hover:bg-white hover:text-gray-900 
                      dark:hover:bg-gray-800 dark:hover:text-white 
                      active:bg-gray-200 dark:active:bg-gray-700 
                      border border-gray-900 dark:border-white/50 
                      transition-all duration-200
                    "
                  >
                    Sign Out
                    <Icon icon="solar:logout-outline" width="20" height="20" />
                  </button>
                  <div
                    className="
                      flex w-full items-center justify-center gap-2 
                      text-base font-medium 
                      px-4 py-3 rounded-md 
                      border border-gray-900 dark:border-white 
                      hover:bg-gray-900 hover:text-white 
                      dark:hover:bg-white dark:hover:text-gray-900 
                      active:bg-gray-200 dark:active:bg-gray-700 
                      transition-all duration-200
                    "
                  >
                    <Image
                      src="/images/home/avatar_1.jpg"
                      alt="User Avatar"
                      width={24}
                      height={24}
                      quality={100}
                      className="rounded-full"
                    />
                    <p className="text-gray-900 dark:text-white capitalize">
                      {user?.name || session?.user?.name || user?.email || session?.user?.email}
                    </p>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
