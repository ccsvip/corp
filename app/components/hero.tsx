import Image from "next/image"

interface IProps {
    imgUrl: string;
    altText: string;
    content: string;

}

export default function HeroImg(props: IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image 
        src={props.imgUrl} 
        alt={props.altText}
        fill
        objectFit='cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-700'></div>
      </div>
      <div className='text-white flex justify-center pt-48 text-6xl'>
        <h1>{props.content}</h1>
      </div>
    </div>
  )
}