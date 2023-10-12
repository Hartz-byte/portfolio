import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Metaverse Website',
          path: '/p1.png',
          description: 'Explore the future of the World.',
          url: 'https://metaverse-website-7dilfbw31-harsh-guptas-projects.vercel.app/',
        },
        {
          title: 'Music Player',
          path: '/p2.png',
          description: 'Login your spotify and play your library.',
          url: 'https://github.com/Hartz-byte/music-player-React',
        },
        {
          title: 'Real Estate Website',
          path: '/p3.png',
          description: 'Explore your new house.',
          url: 'https://hartz-byte.github.io/real-estate-website-React/',
        },
        {
          title: 'Live Weather',
          path: '/p4.png',
          description: 'Live Weather of any city, you search for.',
          url: 'https://live-weather-react-i295gz2t3-harsh-guptas-projects.vercel.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Movie Search',
          path: '/p5.png',
          description: 'Search any movie to watch tonight.',
          url: 'https://github.com/Hartz-byte/movie-search-React',
        },
        {
          title: 'T0-do List',
          path: '/p6.png',
          description: 'Note, or edit your to-do list.',
          url: 'https://hartz-byte.github.io/to-do-list-React/',
        },
        {
          title: 'Meme Generator',
          path: '/p7.png',
          description: 'Meme, quote, riddle, wisdon generator.',
          url: 'https://hartz-byte.github.io/meme-generator/',
        },
        {
          title: 'Resturant Menu',
          path: '/p8.png',
          description: 'Hungry? Find something on the menu.',
          url: 'https://github.com/Hartz-byte/resturant-menu-React',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
                <div 
                  key={index}
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                >
                  <a href={image.url} target='_blank'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image
                        src={image.path}
                        alt='project images'
                        width={500}
                        height={300}
                      />

                      {/* overlay gradient */}
                      <div
                        className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                      </div>

                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* part 1 */}
                          <div className='delay-100 text-black'>
                            {image.title}
                          </div>

                          {/* part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            {image.description}
                          </div>

                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight className='text-accent'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default WorkSlider
