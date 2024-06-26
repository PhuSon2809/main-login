import Lottie from 'lottie-react'
import AnimationBg from '~/constants/animation/AnimationBg.json'

function Landing() {
  return (
    <div
      className='w-screen h-screen relative overflow-hidden'
      style={{ background: 'radial-gradient(50% 158.02% at 50% 50.99%, #001D2D 0%, #070030 74.5%)' }}
    >
      <div className='absolute top-[-60%] left-[-65%] rotate-[-25deg]'>
        <Lottie animationData={AnimationBg} className='w-[120%]' />
      </div>
      <div className='absolute botom-0 right-0 rotate-[-25deg]'>
        <Lottie animationData={AnimationBg} className='w-[120%]' />
      </div>
    </div>
  )
}

export default Landing
