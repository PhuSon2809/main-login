import classNames from 'classnames'
import { useCallback, useState } from 'react'
import Container from './Container'
import ButtonBottom from './ButtonBottom'
import Input from './Input'
import ModalSuccess from './ModalSuccess'

interface EmailPhoneStepOTPProps {
  email: string
  onBack: () => void
  onNext: () => void
}

const EmailPhoneStepOTP = ({ email, onBack }: EmailPhoneStepOTPProps) => {
  const [otp, setOtp] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [modalSuccess, setModalSuccess] = useState<boolean>(false)

  const handleCreateAccount = useCallback(() => {
    if (!otp) {
      setError('This field is required!')
      return
    }
    setModalSuccess(true)
  }, [otp])

  return (
    <>
      <div className={classNames('w-full h-full flex flex-col', modalSuccess && 'blur-lg')}>
        <Container className='py-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
          <span className='text-[600] font-bold'>Create with Email/Phone</span>
          <span className='text-[0.875rem]/[1.5rem] text-[#0D0D0DA3]'>
            OTP has been sent to your email <span className='font-bold'>"{email}"</span>. Please check your inbox and
            enter the code to proceed.
          </span>
          <Input
            placeholder='Enter OTP'
            value={otp}
            onInputChange={(e) => {
              setOtp(e.target.value)
              setError('')
            }}
          />
          {error && <span className='text-red-500 text-[0.75rem]/[1rem]'>{error}</span>}
          <div className='text-[1rem] text-[#1E1B39] text-center underline underline-offset-2'>Resend</div>
        </Container>

        <ButtonBottom title='Confirm' onBack={onBack} onNext={handleCreateAccount} />
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

export default EmailPhoneStepOTP
