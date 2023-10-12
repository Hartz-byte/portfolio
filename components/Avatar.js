import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/me1.png'}
        alt="avatar"
        width={350}
        height={325}
        className="translate-z-0 w-full"
      />
    </div>
  )
}

export default Avatar;
