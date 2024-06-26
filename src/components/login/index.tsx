import LoginHome from './LoginHome'
import ImportSeedphrase from './ImportSeedphrase'
import ImportPrivateKey from './ImportPrivateKey'
import SignInEmailPhone from './SignInEmailPhone'
import CreateBlockChain from './CreateBlockChain'
import CreateEmailPhone from './CreateEmailPhone'
import { Fragment, useState } from 'react'
import AnimationPage from './component/AnimationPage'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import SignInWithSecretKey from './SignInWidthSecretKey'

interface LoginProps {
  isOpen: boolean
  onClose: () => void
}

const Login = ({ isOpen, onClose }: LoginProps) => {
  const [step, setStep] = useState<number>(1)

  const getListSeed = async () => {
    return await window.finSdk.getSeed()
  }

  const listSeed = getListSeed()
  console.log('listSeed', listSeed)

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
      enterTo='opacity-100 translate-y-0 sm:scale-300'
      leave='ease-in duration-300'
      leaveFrom='opacity-100 translate-y-0 sm:scale-300'
      leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
    >
      <div
        className='fixed inset-0 w-screen h-screen overflow-hidden bg-black/[.20] backdrop-blur-[10px] z-[100000]'
        style={{ boxShadow: '0px 0px 80px 0px #0000000D' }}
        onClick={onClose}
      >
        <div className='w-full h-full p-5 flex justify-end relative'>
          <div
            className={classNames(
              'h-full aspect-[9/20] rounded-2xl bg-white/[.88] backdrop-blur-[80px] p-5 flex relative overflow-hidden min-w-[340px]',
              step === 1 && 'pt-0'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimationPage isVisble={step === 1} className={step === 1 ? 'block' : 'hidden'} homePage={true}>
              <LoginHome setStep={setStep} />
            </AnimationPage>
            <AnimationPage isVisble={step === 2} className={step === 2 ? 'block' : 'hidden'}>
              <ImportSeedphrase onBack={() => setStep(1)} />
            </AnimationPage>
            <AnimationPage isVisble={step === 3} className={step === 3 ? 'block' : 'hidden'}>
              <ImportPrivateKey onBack={() => setStep(1)} />
            </AnimationPage>
            <AnimationPage isVisble={step === 4} className={step === 4 ? 'block' : 'hidden'}>
              <SignInEmailPhone onBack={() => setStep(1)} />
            </AnimationPage>
            <AnimationPage isVisble={step === 5} className={step === 5 ? 'block' : 'hidden'}>
              <CreateBlockChain onBack={() => setStep(1)} />
            </AnimationPage>
            <AnimationPage isVisble={step === 6} className={step === 6 ? 'block' : 'hidden'}>
              <CreateEmailPhone onBack={() => setStep(1)} />
            </AnimationPage>
            <AnimationPage isVisble={step === 7} className={step === 7 ? 'block' : 'hidden'}>
              <SignInWithSecretKey onBack={() => setStep(1)} />
            </AnimationPage>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Login
