import { useCallback } from 'react'
import ButtonBottom from './component/ButtonBottom'
import Container from './component/Container'
import UploadQR from './component/UploadQR'

interface SignInWithSecretKeyProps {
  onBack: () => void
}

const SignInWithSecretKey = ({ onBack }: SignInWithSecretKeyProps) => {
  const handleImportPK = useCallback(() => {
    console.log('sign in')
  }, [])

  return (
    <>
      <Container className='pb-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
        <span className='font-customSemiBold text-[1.25rem]/[1.5rem]'>Sign in with Secret Key</span>

        <UploadQR hideOr />
      </Container>

      <ButtonBottom title='Confirm' onBack={() => onBack()} onNext={handleImportPK} />
    </>
  )
}

export default SignInWithSecretKey
