import Container from './component/Container'
import ButtonBottom from './component/ButtonBottom'
import { useCallback, useState } from 'react'
import Input from './component/Input'
import UploadQR from './component/UploadQR'

interface ImportPrivateKeyProps {
  onBack: () => void
}

const ImportPrivateKey = ({ onBack }: ImportPrivateKeyProps) => {
  const [priKey, setPriKey] = useState<string>('')

  const handleImportPK = useCallback(() => {
    console.log(priKey)
  }, [])

  return (
    <>
      <Container className='pb-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
        <span className='font-customSemiBold text-[1.25rem]/[1.5rem]'>Import with Private Key!</span>
        <Input
          placeholder='Enter private key'
          value={priKey}
          onInputChange={(e) => {
            setPriKey(e.target.value)
          }}
        />

        <UploadQR />
      </Container>

      <ButtonBottom title='Confirm' onBack={() => onBack()} onNext={handleImportPK} />
    </>
  )
}

export default ImportPrivateKey
