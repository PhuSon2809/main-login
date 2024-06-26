import { useState } from 'react'
import EmailPhoneStep1 from './component/EmailPhoneStep1'
import EmailPhoneStepOTP from './component/EmailPhoneStepOTP'

interface CreateEmailPhoneProps {
  onBack: () => void
}

const CreateEmailPhone = ({ onBack }: CreateEmailPhoneProps) => {
  const [step, setStep] = useState<number>(1)
  const [email, setEmail] = useState<string>('')

  return (
    <>
      {step === 1 && (
        <EmailPhoneStep1
          email={email}
          setEmail={setEmail}
          onBack={() => {
            onBack()
          }}
          onNext={() => {
            setStep(step + 1)
          }}
        />
      )}
      {step === 2 && (
        <EmailPhoneStepOTP
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

export default CreateEmailPhone
