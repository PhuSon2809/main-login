import { useState } from 'react'
import SignInEmailPhoneStep1 from './component/SignInEmailPhoneStep1'
import SignInEmailPhoneStepOTP from './component/SignInEmailPhoneStepOTP'

interface SignInEmailPhoneProps {
  onBack: () => void
}

const SignInEmailPhone = ({ onBack }: SignInEmailPhoneProps) => {

  const [step, setStep] = useState<number>(1)
  const [email, setEmail] = useState<string>('')

  return (
    <>
      {step === 1 && (
        <SignInEmailPhoneStep1
          email={email}
          setEmail={setEmail}
          onBack={() => {
            onBack();
          }}
          onNext={() => {
            setStep(step + 1)
          }}
        />
      )}
      {step === 2 && (
        <SignInEmailPhoneStepOTP
          email={email}
          onBack={() => {
            setStep(step - 1)
          }}
          onNext={() => {
            setStep(step + 1)
          }}
        />
      )}
    </>
  )
}

export default SignInEmailPhone
