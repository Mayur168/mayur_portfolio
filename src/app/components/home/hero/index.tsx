'use client'
import { useRef } from 'react'
import { motion, Easing } from 'framer-motion';

import Link from 'next/link'
import Image from 'next/image'

// Define TypeScript interface for avatarList (if re-enabled)
interface Avatar {
  image: string
}
interface AvatarList {
  avatarList: Avatar[]
}

const bottomAnimation: {
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: { duration: number; ease: Easing };
} = {
  initial: { y: 50, opacity: 1 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};


export default function Hero({ avatarList }: { avatarList?: AvatarList }) {
  const ref = useRef(null)

  return (
    <section id="hero" className="relative w-full">
      {/* Background gradient with responsive adjustments */}
      <div
        className="
         relative w-full pt-20 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10
        "
      >
        <div className="container relative z-10">
          <div ref={ref} className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Heading text */}
            <motion.div
              {...bottomAnimation}
              className="flex flex-col text-center items-center gap-4"
            >
              <h1
                className="
                  font-medium w-full 
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  leading-tight sm:leading-snug
                "
              >
                Crafting
                <span className="instrument-font Relaxed italic font-normal dark:text-white/70">
                  {' '}
                  pixel-perfect{' '}
                </span>
                web experiences
              </h1>
              <p
                className="
                  max-w-xl sm:max-w-2xl 
                  text-base sm:text-lg 
                  text-gray-600 dark:text-white/60
                "
              >
                I'm a passionate web developer building modern, responsive, and
                high-performance websites that bring your ideas to life with clean
                code and innovative design.
              </p>
            </motion.div>

            <motion.div
              {...bottomAnimation}
              className="flex flex-col items-center justify-center gap-6 sm:gap-8"
            >
              <div
                className="
                  flex flex-col sm:flex-row 
                  items-center justify-center 
                  gap-6 sm:gap-8 w-full
                "
              >
                {/* View Portfolio Link */}
                <Link
                  href="/#work"
                  className="
                 group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue
                  "
                >
                  <span
                    className="
                      flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-28
                    "
                  >
                    View My Work
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      w-8 h-8 sm:w-10 sm:h-10 
                      transform transition-transform duration-200 ease-in-out 
                      group-hover:-translate-x-32 sm:group-hover:-translate-x-36 
                      group-hover:rotate-45
                    "
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="20"
                      className="
                        fill-white 
                        transition-colors duration-200 ease-in-out 
                        group-hover:fill-purple-600
                      "
                    />
                    <path
                      d="M15.832 15.3334H24.1654V23.6667"
                      className="
                        stroke-gray-900 
                        transition-colors duration-200 ease-in-out 
                        group-hover:stroke-white
                      "
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.832 23.6667L24.1654 15.3334"
                      className="
                        stroke-gray-900 
                        transition-colors duration-500 ease-in-out 
                        group-hover:stroke-white
                      "
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Avatar section (uncomment to enable) */}
                {/* <div className="flex items-center gap-4 sm:gap-6">
                  <ul className="flex flex-row items-center">
                    {avatarList?.avatarList?.map((item, index) => (
                      <li
                        key={index}
                        className="
                          -mr-2 hover:ml-2 
                          transition-all duration-200 
                          z-[calc(10 - var(--index))]
                        "
                        style={{ '--index': index } as React.CSSProperties}
                      >
                        <Image
                          src={item.image}
                          alt="Client Image"
                          width={36}
                          height={36}
                          quality={100}
                          className="
                            rounded-full border-2 border-white 
                            w-9 h-9 sm:w-11 sm:h-11
                          "
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-1">
                    <StarRating count={4} color="#F59E0B" />
                    <p
                      className="
                        text-xs sm:text-sm 
                        font-normal text-gray-600 dark:text-white/60
                      "
                    >
                      100+ successful projects
                    </p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}