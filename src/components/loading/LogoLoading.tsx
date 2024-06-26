import { motion } from 'framer-motion'
import NProgress from 'nprogress'
import { useEffect, useMemo } from 'react'
import { Logo } from '../logo'

const progressBarStyles = `
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    position: fixed;
    z-index: 1031; 
    background-color: #454F5B;
    box-shadow: 0 0 2px #454F5B;
  }
  #nprogress .peg {
    right: 0;
    opacity: 1;
    width: 100px;
    height: 100%;
    display: block;
    position: absolute;
    transform: rotate(3deg) translate(0px, -4px);
    box-shadow: 0 0 10px #454F5B, 0 0 5px #454F5B;
  }
`

function ProgressBar() {
  NProgress.configure({
    showSpinner: false
  })

  useMemo(() => {
    NProgress.start()
  }, [])

  useEffect(() => {
    NProgress.done()
  }, [])

  return null
}

export default function LogoLoading({ ...other }) {
  return (
    <>
      <style>{progressBarStyles}</style>
      <ProgressBar />

      <div
        className='h-full flex items-center justify-center bg-gradient-to-br from-greenMain/[.2] to-blueMain/[.2]'
        {...other}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity
          }}
        >
          <Logo className='size-20' />
        </motion.div>

        <motion.div
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ['25%', '25%', '50%', '50%', '25%']
          }}
          transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
          className='size-[100px] rounded-[25%] absolute border-[3px] border-solid border-blueMain/[.4]'
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ['25%', '25%', '50%', '50%', '25%']
          }}
          transition={{
            ease: 'linear',
            duration: 3.2,
            repeat: Infinity
          }}
          className='size-[120px] rounded-[25%] absolute border-[8px] border-solid border-greenMain/[.6]'
        />
      </div>
    </>
  )
}
