import { Dialog as DialogTailwind, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type DialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  className?: string
}

function Dialog({ open, setOpen, children, className }: DialogProps) {
  return (
    <Transition show={open}>
      <DialogTailwind className='relative z-[500]' onClose={setOpen}>
        <TransitionChild
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/[.44] backdrop-blur-[40px] shadow-4xl transition-opacity' />
        </TransitionChild>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full xs:items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <TransitionChild
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel
                className={`relative transform overflow-hidden rounded-lg bg-white transition-all min-w-[300px] ${className}`}
              >
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </DialogTailwind>
    </Transition>
  )
}

export default Dialog
