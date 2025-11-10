


// 'use client';
// import { Icon } from '@iconify/react/dist/iconify.js';
// import Image from 'next/image';
// import { useState } from 'react';

// // Define TypeScript interfaces for better type safety
// interface OnlinePresenceItem {
//   image: string;
//   title: string;
//   tag: string[];
//   link?: string;
// }

// const onlinePresenceList: OnlinePresenceItem[] = [
//   {
//     image: '/images/home/mayur/screenshot_search.png',
//     title: 'Scan and Prescription Record System',
//     tag: ['OCR', 'NLP', 'Search', 'Reporting'],
//     link: '#',
//   },
//   {
//     image: '/images/home/mayur/Screenshot 2025-11-10 103326.png',
//     title: 'Paintshop ERP System',
//     tag: ['MERN Stack', 'ERP', 'Dashboards', 'Real-time Updates'],
//     link: '#',
//   },
//   {
//     image: '/images/home/mayur/Screenshot 2025-11-10 112436.png',
//     title: 'Agri ERP',
//     tag: ['Crop Management', 'Inventory', 'Database'],
//     link: '#',
//   },
//   {
//     image: '/images/home/mayur/Screenshot 2025-11-10 113254.png',
//     title: 'Hungree Table - Food Portal',
//     tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
//     link: '#',
//   },
//   {
//     image: '/images/home/mayur/main-screen1.png',
//     title: 'Bookshop Management System',
//     tag: ['Web-based', 'Inventory', 'Purchase Management'],
//     link: '#',
//   },
//   {
//     image: '/images/home/mayur/Screenshot 2025-11-10 113516.png',
//     title: 'Hungree Table - Admin Pannel',
//     tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
//     link: '#',
//   },
//   {
//     image: '/images/projects/xray-recognition.jpg',
//     title: 'X-ray Recognition System',
//     tag: ['Python', 'Django', 'Image Classification'],
//     link: '#',
//   },
// ];

// function OnlinePresence() {
//   const [onlinePresenceListState] = useState<OnlinePresenceItem[]>(onlinePresenceList);

//   // Duplicate the list for seamless infinite scrolling
//   const duplicatedList = onlinePresenceListState ? [...onlinePresenceListState, ...onlinePresenceListState] : [];

//   return (
//     <section
//       id="work"
//       className="relative w-auto pt-15 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16">
//           <div className="max-w-2xl text-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
//               My Projects
//               <span className="instrument-font italic font-normal dark:text-white/70">
//                 {' '}
//                 Portfolio
//               </span>
//             </h2>
//           </div>
//           <div className="w-full overflow-hidden">
//             <div
//               className="flex whitespace-nowrap will-change-transform hover:[animation-play-state:paused] /* Optional: pause on hover */"
//               style={{
//                 animation: 'scroll-left 20s linear infinite', // Even slower scroll to better view all 7 projects
//               }}
//             >
//               {duplicatedList.map((item, index) => (
//                 <div
//                   key={index}
//                   className="px-2 sm:px-4 flex-shrink-0 w-full sm:w-[50%] md:w-[33.333%] lg:w-[25%]" // 1 on mobile, 2 on sm, 3 on md, 4 on lg+
//                 >
//                   <div className="group flex flex-col gap-4 sm:gap-6">
//                     <div className="relative aspect-[1.524] w-full">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className="rounded-2xl object-cover"
//                         unoptimized={true}
//                         sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                       />
//                     </div>
//                     <div className="flex flex-col items-start gap-3 sm:gap-4">
//                       <h5 className="text-lg sm:text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
//                         {item.title}
//                       </h5>
//                       <div className="flex flex-wrap gap-2 sm:gap-3">
//                         {item.tag?.map((tag: string, tagIndex: number) => (
//                           <span
//                             key={tagIndex}
//                             className="text-xs sm:text-sm border border-gray-200 dark:border-white/30 py-1.5 px-3 sm:px-4 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default OnlinePresence;


'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; // Required for autoplay functionality

interface OnlinePresenceItem {
  image: string;
  title: string;
  tag: string[];
  link?: string;
}

const onlinePresenceList: OnlinePresenceItem[] = [
  {
    image: '/images/home/mayur/screenshot_search.png',
    title: 'Scan and Prescription Record System',
    tag: ['OCR', 'NLP', 'Search', 'Reporting'],
    link: '#',
  },
  {
    image: '/images/home/mayur/Screenshot 2025-11-10 103326.png',
    title: 'Paintshop ERP System',
    tag: ['MERN Stack', 'ERP', 'Dashboards', 'Real-time Updates'],
    link: '#',
  },
  {
    image: '/images/home/mayur/Screenshot 2025-11-10 112436.png',
    title: 'Agri ERP',
    tag: ['Crop Management', 'Inventory', 'Database'],
    link: '#',
  },
  {
    image: '/images/home/mayur/Screenshot 2025-11-10 113254.png',
    title: 'Hungree Table - Food Portal',
    tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
    link: '#',
  },
  {
    image: '/images/home/mayur/main-screen1.png',
    title: 'Bookshop Management System',
    tag: ['Web-based', 'Inventory', 'Purchase Management'],
    link: '#',
  },
  {
    image: '/images/home/mayur/Screenshot 2025-11-10 113516.png',
    title: 'Hungree Table - Admin Pannel',
    tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
    link: '#',
  },

];

function OnlinePresence() {
  const [onlinePresenceListState] = useState<OnlinePresenceItem[]>(onlinePresenceList);

  // SingleProject component for rendering each project card
  const SingleProject = ({ item }: { item: OnlinePresenceItem }) => (
    <div className="px-2 sm:px-4 h-full">
      <div className="group flex flex-col gap-4 sm:gap-6 h-full bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[1.524] w-full flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            unoptimized={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="flex flex-col items-start gap-3 sm:gap-4 min-h-[80px] flex-1">
          <h5 className="text-lg sm:text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 line-clamp-2 w-full">
            {item.title}
          </h5>
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full">
            {item.tag?.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="text-xs sm:text-sm border border-gray-200 dark:border-white/30 py-1.5 px-3 sm:px-4 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Responsive breakpoints for Swiper: # of slides per view
  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 25 },
  };

  return (
    <section
      id="work"
      className="relative w-auto pt-15 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              My Projects
              <span className="instrument-font italic font-normal dark:text-white/70">
                {' '}
                Portfolio
              </span>
            </h2>
          </div>
          <div className="w-full">
            {onlinePresenceListState.length > 0 && (
              <Swiper
                modules={[Autoplay]} // Pass modules array
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={breakpoints}
                loop={true} // Infinite continuous loop
                autoplay={{
                  delay: 2000, // Faster: Auto-scroll every 2s
                  disableOnInteraction: false, // Keep autoplay after user interaction
                  pauseOnMouseEnter: true, // Pause on hover
                }}
                speed={500} // Smooth transition speed
                grabCursor={true}
                className="min-h-[400px] h-auto"
              >
                {onlinePresenceListState.map((item, index) => (
                  <SwiperSlide key={index}>
                    <SingleProject item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;