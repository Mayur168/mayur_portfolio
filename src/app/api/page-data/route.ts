

import { NextResponse } from 'next/server'
import { FaCode, FaServer, FaPaintBrush, FaPlug, FaRocket } from 'react-icons/fa';
import { IconType } from 'react-icons';
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu';

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png',
    title: 'ReactJS',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/120px-Python-logo-notext.svg.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/120px-Python-logo-notext.svg.png',
    title: 'Python',
  },
  {
    image: 'data:image/png;base64,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', // Use local or replace with a free PNG URL like 'https://www.pngall.com/wp-content/uploads/5/Tailwind-CSS-PNG-Image.png'
    darkImg: '/images/tech/tailwind-css.png',
    title: 'Tailwind CSS',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png',
    title: 'HTML',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/120px-Bootstrap_logo.svg.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/120px-Bootstrap_logo.svg.png',
    title: 'Bootstrap',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png',
    title: 'JavaScript',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/120px-MERN-logo.png',
    darkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/120px-MERN-logo.png',
    title: 'MERN',
  },
]

const onlinePresenceList: onlinePresence[] = [
  // {
  //   image: 'public\images\home\mayur\Screenshot 2025-11-10 103326.png',
  //   title: 'Paintshop ERP System',
  //   tag: ['MERN Stack', 'ERP', 'Dashboards', 'Real-time Updates'],
  //   link: '#',
  // },
  // {
  //   image: '/images/home/mayur/screenshot_search.png',
  //   title: 'Scan and Prescription Record System',
  //   tag: ['OCR', 'NLP', 'Search', 'Reporting'],
  //   link: '#',
  // },
  // {
  //   image: '/images/home/mayur/Screenshot 2025-11-10 103326.png',  
  //   title: 'Paintshop ERP System',
  //   tag: ['MERN Stack', 'ERP', 'Dashboards', 'Real-time Updates'],
  //   link: '#',
  // },
  // {
  //   image: '/images/home/mayur/Screenshot 2025-11-10 112436.png',
  //   title: 'Agri ERP',
  //   tag: ['Crop Management', 'Inventory', 'Database'],
  //   link: '#',
  // },
  // {
  //   image: '/images/home/mayur/Screenshot 2025-11-10 113254.png',
  //   title: 'Hungree Table - Food Portal',
  //   tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
  //   link: '#',
  // },
  // {
  //   image: '/images/home/mayur/main-screen1.png',
  //   title: 'Bookshop Management System',
  //   tag: ['Web-based', 'Inventory', 'Purchase Management'],
  //   link: '#',
  // },
  //  {
  //   image: '/images/home/mayur/Screenshot 2025-11-10 113516.png',
  //   title: 'Hungree Table - Admin Pannel',
  //   tag: ['React', 'QR Codes', 'Order Tracking', 'Analytics'],
  //   link: '#',
  // },
  // {
  //   image: '/images/projects/xray-recognition.jpg',
  //   title: 'X-ray Recognition System',
  //   tag: ['Python', 'Django', 'Image Classification'],
  //   link: '#',
  // },
  // {
  //   image: '/images/projects/text-recognition.jpg',
  //   title: 'Text Recognition System',
  //   tag: ['Python', 'Django', 'OCR', 'JavaScript'],
  //   link: '#',
  // },
];

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: '2x the speed. Great for an MVP, Web App or complex problem',
    plan_price: '$3800',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What services does Awake Agency offer?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How is pricing structured at Awake Agency?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: '#',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: '#',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: '#',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};