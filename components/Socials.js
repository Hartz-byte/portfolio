import Link from "next/link";
import { RiInstagramLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { HiEnvelope } from 'react-icons/hi2';

const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.instagram.com/hrsh_line_up/'}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={'https://github.com/Hartz-byte'}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <AiFillGithub />
      </Link>

      <Link
        href={'/contact'}
        className="hover:text-accent transition-all duration-300"
      >
        <HiEnvelope />
      </Link>
    </div>
  )
};

export default Socials;
