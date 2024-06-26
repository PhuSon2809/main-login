import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react'

type PopoverProps = {
  className?: string
  children: ReactNode
  content: ReactNode
}

function PopoverCustom({ children, content, className }: PopoverProps) {
  const wrapperRef = useRef<HTMLButtonElement>(null)

  const [show, setShow] = useState<boolean>(false)

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
    <Popover>
      <PopoverButton ref={wrapperRef} onClick={() => setShow(!show)}>
        {children}
      </PopoverButton>
      <Transition
        as={Fragment}
        show={show}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-0'
        enterTo='opacity-100 translate-y-2'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100 translate-y-2'
        leaveTo='opacity-0 translate-y-0'
      >
        <PopoverPanel anchor='bottom end' className={`z-[200] ${className}`}>
          {content}
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}

export default PopoverCustom
