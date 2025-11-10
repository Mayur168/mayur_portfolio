// 'use client'
// import Slider from 'react-infinite-logo-slider'
// import SingleBrand from './SingleBrand'
// import { useEffect, useState } from 'react';

// function Brand() {
//   const [brandList, setbrandList] = useState<any>(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/page-data')
//         if (!res.ok) throw new Error('Failed to fetch')

//         const data = await res.json()
//         setbrandList(data?.brandList || [])
//       } catch (error) {
//         console.error('Error fetching services:', error)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <section>
//       <div className='py-8 sm:py-12 lg:py-16 2xl:py-20'>
//         <div className='container'>
//           <div className='gap-4'>
//             <div className='flex justify-center text-center py-4 relative'>
//               <h2 className='relative px-2 text-2xl font-bold text-dark_black dark:text-white md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent'>
//                 Featured Brands We’ve Worked With
//               </h2>
//             </div>

//             {brandList && brandList.length > 0 && (
//               <div className='py-3 Xsm:py-7'>
//                 <Slider
//                   height='180px'
//                   width='220px'
//                   duration={20}
//                   pauseOnHover={true}
//                   blurBorders={false}>
//                   {brandList?.map((items: any, index: any) => (
//                     <SingleBrand key={index} brand={items} />
//                   ))}
//                 </Slider>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Brand

"use client";
import Slider from "react-infinite-logo-slider";
import SingleBrand from "./SingleBrand";
import { useEffect, useState } from "react";

function Brand() {
  const [brandList, setbrandList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setbrandList(data?.brandList || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="py-8 sm:py-12 lg:py-16 2xl:py-20">
        <div className="container">
          <div className="gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <h2 className="relative px-2 text-2xl font-bold text-dark_black dark:text-white md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent">
                Languages I’m Proficient In{" "}
              </h2>
            </div>

            {brandList && brandList.length > 0 && (
              <div className="h-[180px] flex items-center justify-center py-3 Xsm:py-7 Xsm:h-[200px]">
                <Slider
                  width="220px"
                  duration={20}
                  pauseOnHover={true}
                  blurBorders={false}
                >
                  {brandList?.map((items: any, index: any) => (
                    <SingleBrand key={index} brand={items} />
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
