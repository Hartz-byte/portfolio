import React, { useState } from 'react'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiFramer,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="0"/>,
          <FaCss3 key="1"/>,
          <FaJs key="2"/>,
          <FaReact key="3"/>,
          // <SiNextdotjs key="5"/>,
          <SiFramer key="4"/>,
          // <FaWordpress key="6"/>,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Game/ Metaverse Developer',
        stage: '2021 - 2023',
      },
      {
        title: 'React Developer',
        stage: '2023 - present',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'High School',
        stage: '2018',
      },
      {
        title: 'Graduation in B.Tech (CSE)',
        stage: '2019-2023',
      },
    ],
  },
]

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Every skill you acquire <span className='text-accent'>doubles</span> your odds of success.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Greetings, I&apos;m Harsh. Developer of React Js here. I&apos;m working on React projects that are using CSS, external imports, and APIs to build web applications. I can provide each web application a unique design and function by utilizing apis, react tools, css, and framer motion. For my next new ability, three.js, I&apos;m also into it.
          </motion.p>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'  
                >
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>

                  <div className='hidden md:flex'>:</div>
                  <div className='text-white'>{item.stage}</div>

                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                         className='text-2xl text-white'>
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
