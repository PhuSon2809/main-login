import Container from './component/Container'
import ButtonBottom from './component/ButtonBottom'
import { useCallback, useState } from 'react'
import UploadQR from './component/UploadQR'
import ic_paste from '~/assets/icons/paste.svg'

interface ImportSeedphraseProps {
  onBack: () => void
}

const ImportSeedphrase = ({ onBack }: ImportSeedphraseProps) => {
  const [customSeedphrase, setCustomSeedphrase] = useState('')

  const handlePaste = useCallback(async () => {
    const text = await navigator.clipboard.readText()
    setCustomSeedphrase(text)
  }, [])

  const handleImportSP = useCallback(() => {}, [])

  return (
    <>
      <Container className='pb-5 flex flex-col gap-5 text-[#0D0D0D] text-[1.25rem]/[1.5rem]'>
        <span className='font-customSemiBold text-[1.25rem]/[27.3px]'>Import with Seed Phrase!</span>
        <div className='relative bg-white p-3 min-h-[47%] max-h-[47%] rounded-[8.4px]'>
          <textarea
            className='w-full h-full text-[1rem]'
            placeholder='Enter 24 seed phrase'
            value={customSeedphrase}
            onChange={(e) => {
              setCustomSeedphrase(e.target.value)
            }}
          />
          {customSeedphrase === '' && (
            <img src={ic_paste} className='w-6 h-6 absolute top-2 right-2' onClick={handlePaste} />
          )}
        </div>

        <UploadQR />
      </Container>

      <ButtonBottom title='Confirm' onBack={() => onBack()} onNext={handleImportSP} />
    </>
  )
}

export default ImportSeedphrase
