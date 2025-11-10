// 'use client'
// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'

// function Experience() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: false, margin: '-50px' })

//   const experiences = [
//     {
//       id: 'heuristic-2024-02', // Added unique ID
//       company: 'Heuristic Technopark',
//       location: 'Nashik, Maharashtra',
//       duration: '02/2024 - Present',
//       role: 'MERN Stack Developer',
//       responsibilities: [
//         'Developing and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js.',
//         'Collaborating with cross-functional teams to design and implement scalable, user-centric solutions.',
//         'Optimizing application performance and ensuring seamless integration of front-end and back-end components.',
//         'Contributing to agile development processes, including sprint planning and code reviews.',
//       ],
//       technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'TypeScript'],
//     },
//     {
//       id: 'netleap-2023-12a', // Added unique ID
//       company: 'Netleap IT and Training Solutions',
//       location: 'Nashik, Maharashtra',
//       duration: '12/2023 - 04/2024',
//       role: 'Web Developer',
//       responsibilities: [
//         'Spearheaded the development and execution of diverse projects, showcasing expertise in HTML, CSS, JavaScript, Bootstrap, and Firebase.',
//         'Demonstrated leadership prowess by providing guidance and direction to team members, ensuring project milestones were achieved promptly and with precision.',
//         'Mentored and coached students involved in projects, imparting valuable insights and fostering their growth in web development.',
//         'Recognized for dedication, professionalism, and technical acumen, contributing significantly to the success of projects and the organization.',
//       ],
//       technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase'],
//     },
//     {
//       id: 'netleap-2023-12b', // Updated to ensure uniqueness
//       company: 'Netleap IT and Training Solutions, Nashik',
//       duration: '12/2023 - 04/2024',
//       responsibilities: [
//         'Spearheaded the development and execution of diverse projects, showcasing expertise in HTML, CSS, JavaScript, Bootstrap, and Firebase.',
//         'Demonstrated leadership prowess by providing guidance and direction to team members, ensuring project milestones were achieved promptly and with precision.',
//         'Mentored and coached students involved in projects, imparting valuable insights and fostering their growth in web development.',
//         'Recognized for dedication, professionalism, and technical acumen, contributing significantly to the success of projects and the organization.',
//       ],
//     },
//     {
//       id: 'hackmaster-2023-10',
//       company: 'Hackmaster.Org, Pune',
//       duration: '10/2023 - 03/2024',
//       responsibilities: [
//         'Collaborated with cross-functional teams to develop responsive web applications, ensuring adherence to UI/UX best practices.',
//         'Implemented front-end solutions using HTML, CSS, JavaScript, and React.js, focusing on performance optimization and code efficiency.',
//         'Conducted code reviews and provided constructive feedback to improve code quality and maintainability.',
//         'Assisted in debugging and troubleshooting front-end issues, ensuring timely resolution and minimal impact on user experience.',
//       ],
//     },
//     {
//       id: 'netleap-2023-01',
//       company: 'Netleap IT and Training Solutions, Nashik',
//       duration: '01/2023 - 06/2023',
//       responsibilities: [
//         'Collaborated with development teams to build full-stack web applications, focusing on front-end development using HTML, CSS, and JavaScript.',
//         'Assisted in backend development tasks, including database management and API integration.',
//         'Participated in project planning and contributed to technical discussions to improve application architecture and design.',
//       ],
//     },
//   ]

//   const timelineAnimation = (index) => ({
//     initial: { x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 },
//     animate: inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 },
//     transition: { duration: 0.5, delay: 0.2 + index * 0.3, ease: 'easeOut' },
//   })

//   return (
//     <section id='experience' className='py-8 sm:py-12 lg:py-16 2xl:py-20 bg-gray-50 dark:bg-gray-900'>
//       <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex flex-col gap-8 sm:gap-12 lg:gap-16'>
//           <div className='max-w-3xl text-center mx-auto'>
//             <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
//               My
//               <span className='instrument-font italic font-normal dark:text-white/70'>
//                 {' '}
//                 professional
//               </span>{' '}
//               journey
//             </h2>
//           </div>
//           <div ref={ref} className='relative max-w-4xl mx-auto'>
//             {/* Timeline vertical line */}
//             <div className='absolute left-1.5 sm:left-3 md:left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-white/20'></div>
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={`experience-${exp.id}`} // Uses unique ID
//                 initial={timelineAnimation(index).initial}
//                 animate={timelineAnimation(index).animate}
//                 transition={timelineAnimation(index).transition}
//                 className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0 md:flex-row-reverse'
//                   }`}
//               >
//                 {/* Timeline dot */}
//                 <div className='absolute  left--1 sm:left-4.5 md:left-[calc(50%-0.5rem)] w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full mt-2'></div>
//                 <div
//                   className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-11/12 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                     }`}
//                 >
//                   <h5 className='text-base sm:text-lg font-semibold text-gray-900 dark:text-white'>
//                     {exp.company}
//                   </h5>
//                   <p className='text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-3 sm:mb-4'>
//                     {exp.duration}
//                   </p>
//                   <ul className='list-disc pl-5 text-gray-800 dark:text-white/80'>
//                     {exp.responsibilities.map((resp, idx) => (
//                       <li key={`responsibility-${exp.id}-${idx}`} className='mb-2 text-xssm:text-sm'>
//                         {resp}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience


'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-50px' })

  const experiences = [
    {
      id: 'heuristic-2024-05',
      company: 'Heuristic Technopark',
      location: 'Nashik, Maharashtra',
      duration: '05/2024 - Present',
      role: 'Software Developer',
      responsibilities: [
        'Collaborated with cross-functional teams to design and implement RESTful APIs and interactive user interfaces, optimizing both front-end and back-end performance.',
        'Demonstrated exceptional problem-solving skills and adaptability in resolving complex technical challenges, ensuring timely delivery of high-quality features.',
        'Actively participated in code reviews, contributed to architectural decisions, and integrated third-party services, improving overall project efficiency and maintainability.',
        'Recognized for technical expertise, effective communication, and a results-oriented approach that consistently contributed to project and organizational success.',
      ],
      technologies: [],
    },
    {
      id: 'heuristic-2023-07',
      company: 'Heuristic Technopark',
      location: 'Nashik, Maharashtra',
      duration: '07/2023 - 01/2024',
      role: 'Python Developer Trainee',
      responsibilities: [
        'Completed a 6-month training internship program, gaining strong knowledge in Python programming and related frameworks (Django, Flask).',
        'Successfully developed and implemented Text Recognition and X-ray Detection module-based projects using machine learning and computer vision techniques.',
        'Strengthened understanding of API integration, data processing, and model deployment within real-world applications.',
      ],
      technologies: [],
    },
    {
      id: 'cufront-2024-02',
      company: 'CuFront',
      location: 'Nashik, Maharashtra',
      duration: '02/2024 - 05/2024',
      role: 'Python Developer Trainee',
      responsibilities: [
        'Gained hands-on experience in Python and Django during a 4-month internship focused on the healthcare domain.',
        'Contributed to the design and development of RESTful APIs, ensuring seamless integration and performance.',
        'Assisted in database optimization and query performance improvement, enhancing data retrieval efficiency.',
        'Collaborated closely with cross-functional teams to deliver reliable and impactful backend solutions aligned with project goals.',
      ],
      technologies: [],
    },
  ]

  const timelineAnimation = (index) => ({
    initial: { x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 + index * 0.3, ease: 'easeOut' },
  })

  return (
    <section id='experience' className='py-8 sm:py-12 lg:py-16 2xl:py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 sm:gap-12 lg:gap-16'>
          <div className='max-w-3xl text-center mx-auto'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
              My
              <span className='instrument-font italic font-normal dark:text-white/70'>
                {' '}
                professional
              </span>{' '}
              journey
            </h2>
          </div>
          <div ref={ref} className='relative max-w-4xl mx-auto'>
            {/* Timeline vertical line */}
            <div className='absolute left-1.5 sm:left-3 md:left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-white/20'></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={`experience-${exp.id}`}
                initial={timelineAnimation(index).initial}
                animate={timelineAnimation(index).animate}
                transition={timelineAnimation(index).transition}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0 md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className='absolute  left--1 sm:left-4.5 md:left-[calc(50%-0.5rem)] w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full mt-2'></div>
                <div
                  className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-11/12 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                >
                  <h5 className='text-base sm:text-lg font-semibold text-gray-900 dark:text-white'>
                    {exp.company}
                  </h5>
                  <p className='text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-3 sm:mb-4'>
                    {exp.duration}
                  </p>
                  <ul className='list-disc pl-5 text-gray-800 dark:text-white/80'>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={`responsibility-${exp.id}-${idx}`} className='mb-2 text-xssm:text-sm'>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience