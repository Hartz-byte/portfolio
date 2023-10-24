import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden lg:block text-5xl mb-2"
          >
            I&apos;m looking to experience <br />
            my portfolio, <br />
            while I&apos;m on <span className="text-accent">top</span>, <br />
            and while I&apos;m <span className="text-accent">young</span>.
          </motion.h1>

          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl lg:hidden mt-10 mb-1"
          >
            I&apos;m looking to expand <br />
            my portfolio, <br />
            while I&apos;m on <span className="text-accent">top</span>, <br />
            and while I&apos;m <span className="text-accent">young</span>.
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hi, I&apos;m a React JS developer.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex mb-1"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[400px] max-h-[375px] absolute bottom-40 lg:right-[12%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home;
