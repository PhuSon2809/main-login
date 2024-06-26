import classNames from 'classnames'
import { useState } from 'react'
import ButtonBottom from './ButtonBottom'
import Container from './Container'
import ModalSuccess from './ModalSuccess'

interface BlockChainStepSeedPhraseProps {
  autoSeedPhrase: Array<string>
  customSeedphrase: string
  onBack: () => void
  onNext: () => void
}

const BlockChainStepName = ({ autoSeedPhrase, customSeedphrase, onBack }: BlockChainStepSeedPhraseProps) => {
  const [modalSuccess, setModalSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [walletName, setWalletName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleCreateAccount = () => {
    if (!walletName) {
      setError('This field is required!')
      return
    }
    console.log(autoSeedPhrase, customSeedphrase)
    setModalSuccess(true)
  }

  return (
    <>
      <div className={classNames('w-full h-full flex flex-col', modalSuccess && 'blur-lg')}>
        <Container className='pb-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
          <div className='flex flex-col gap-3'>
            <span className='text-[16px]/[26px] font-customSemiBold'>
              Name <span className='text-[600] font-customSemiBold text-red-500'>*</span>
            </span>
            <input
              className='bg-[#FFFFFF] p-[10px] rounded-lg text-[1rem] focus:outline-none'
              placeholder='Enter your wallet name'
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
            />
            {error && <span className='text-red-500 text-[0.75rem]/[1rem]'>{error}</span>}
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-[16px]/[26px] font-customSemiBold'>Email</span>
            <input
              className='bg-[#FFFFFF] p-[10px] rounded-lg text-[1rem] focus:outline-none'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-[16px]/[26px] font-customSemiBold'>Phone number</span>
            <input
              className='bg-[#FFFFFF] p-[10px] rounded-lg text-[1rem] focus:outline-none'
              placeholder='Enter your phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </Container>

        <ButtonBottom title='Create' onBack={onBack} onNext={handleCreateAccount} />
      </div>

      {modalSuccess && (
        <ModalSuccess
          onClose={() => {
            setModalSuccess(false)
          }}
        />
      )}
    </>
  )
}

export default BlockChainStepName
