import { ReactNode, useEffect, useRef, useState } from 'react'

type PopoverProps = {
  className?: string
  children: ReactNode
  content: ReactNode
  trigger?: 'click' | 'hover'
  location?: string
}

const Popover = ({ children, content, trigger = 'click', className, location = 'left-0 top-12' }: PopoverProps) => {
  const [show, setShow] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleMouseOver = () => {
    if (trigger === 'hover') {
      setShow(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setShow(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false)
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [show])

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className='h-fit relative flex justify-center'
    >
      <div onClick={() => setShow(!show)} className='w-full'>
        {children}
      </div>
      <div
        ref={popoverRef}
        className={`min-w-[200px] h-fit p-4 rounded absolute ${location} z-50 mt-2 ${
          !show ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } origin-top-right transition-all ease-in-out duration-300 ${className}`}
      >
        <div className='w-full'>{content}</div>
      </div>
    </div>
  )
}

export default Popover
