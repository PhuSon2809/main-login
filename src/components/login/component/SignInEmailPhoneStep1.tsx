import Container from './Container'
import ButtonBottom from './ButtonBottom'
import Input from './Input'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface BlockChainStepSeedPhraseProps {
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  onBack: () => void
  onNext: () => void
}

const SignInEmailPhoneStep1 = ({ email, setEmail, onBack, onNext }: BlockChainStepSeedPhraseProps) => {
  const [error, setError] = useState<string>('')

  const handleNext = useCallback(() => {
    if (!email) {
      setError('This field is required!')
      return
    }
    onNext()
  }, [email])

  return (
    <>
      <Container className='py-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
        <span className='font-[600] text-[1.25rem]/[1.5rem]'>Sign in with Email/Phone</span>
        <Input
          placeholder='Enter email or phone number'
          value={email}
          onInputChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
        />
        {error && <span className='text-red-500 text-[0.75rem]/[1rem]'>{error}</span>}
      </Container>

      <ButtonBottom title='Continue' onBack={onBack} onNext={handleNext} />
    </>
  )
}

export default SignInEmailPhoneStep1
