import ButtonLogin from './component/ButtonLogin'

import classNames from 'classnames'
import { Dispatch, SetStateAction, useState } from 'react'
import ic_block from '~/assets/icons/blockChain.svg'
import ic_pk from '~/assets/icons/priKey.svg'
import Anime from './component/Anime'
import Container from './component/Container'

const Title = ({ content }: { content: string }) => {
  return <div className='font-customBold text-[20px]/[28px]'>{content}</div>
}

interface LoginHomeProps {
  setStep: Dispatch<SetStateAction<number>>
}

const LoginHome = ({ setStep }: LoginHomeProps) => {
  const [tab, setTab] = useState<number>(0)
  const [isSignIn, setIsSignIn] = useState<boolean>(false)

  return (
    <>
      {!isSignIn && (
        <div className='w-full flex text-[#0D0D0D]/[.64] text-[18px]/[22px] relative'>
          <button
            className={classNames(tab === 0 && 'font-customSemiBold text-[#0D0D0D]', 'h-[68px] w-1/2 text-center')}
            onClick={() => setTab(0)}
          >
            Import an <br></br> existing account
          </button>
          <button
            className={classNames(tab === 1 && 'font-customSemiBold text-[#0D0D0D]', 'h-[68px] w-1/2 text-center')}
            onClick={() => setTab(1)}
          >
            Create a <br></br> new account
          </button>
          <span className={classNames('w-full absolute bottom-0 left-0 h-[1px] bg-[#0D0D0D]/[.44]')}></span>
          <span
            className={classNames('w-1/2 absolute bottom-[-0.5px] h-[2px]', tab === 0 ? 'left-0' : 'left-1/2')}
            style={{ background: 'linear-gradient(270deg, #5495FC 0%, #31D366 100%)', transition: 'left 0.8s' }}
          ></span>
        </div>
      )}

      <Container>
        <Anime isOpen={tab === 0} className={tab !== 0 ? 'hidden' : 'block'}>
          <div className='w-full mt-5'>
            <Title content={isSignIn ? 'Sign In' : 'Welcome back,'} />
            <div className='text-[14px]/[24px] text-[#0D0D0D]/[.64] mt-2'>
              Import an existing wallet to quickly access and manage your funds for seamless shopping.
            </div>
          </div>
          <div className='flex flex-col mt-5 gap-3'>
            {!isSignIn && (
              <ButtonLogin
                icon={ic_block}
                content='Import with Seed Phrase'
                onClick={() => {
                  setStep(2)
                }}
              />
            )}

            <ButtonLogin
              icon={ic_pk}
              content={isSignIn ? 'Sign in with Secret Key' : 'Import with Private Key'}
              onClick={() => {
                setStep(isSignIn ? 7 : 3)
              }}
            />
          </div>
        </Anime>
        <Anime isOpen={tab === 1} className={tab !== 1 ? 'hidden' : 'block'}>
          <div className='w-full mt-5'>
            <Title content='Welcome,' />
            <div className='text-[14px]/[24px] text-[#0D0D0D]/.[.64] mt-2'>
              Create a new account to start shopping and enjoy exclusive offers.
            </div>
          </div>

          <div className='flex flex-col mt-5 gap-3'>
            <ButtonLogin
              icon={ic_block}
              content='Create with Seed Phrase'
              onClick={() => {
                setStep(5)
              }}
            />
          </div>
        </Anime>
      </Container>

      <div className='w-full text-[16px]/[16px] text-[#0D0D0D]/[.64] text-center justify-self-end'>
        {isSignIn ? 'New User? ' : 'Have an wallet?'}{' '}
        <span
          onClick={() => setIsSignIn(!isSignIn)}
          className='text-[#0D0D0D] font-customSemiBold underline-offset-2 underline'
        >
          {isSignIn ? 'Create a new wallet' : 'Import an wallet'}
        </span>
      </div>
    </>
  )
}

export default LoginHome
