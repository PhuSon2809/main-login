import Container from './Container'
import ic_paste from '~/assets/icons/paste.svg'
import ButtonBottom from './ButtonBottom'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import SaveIcon from '~/components/icons/SaveIcon'

const ItemSeedPhrase = ({ content, onClick }: { content: string; onClick: () => void }) => {
  return (
    <span
      onClick={onClick}
      className='h-[23px] flex items-center justify-center bg-white text-[0.875rem]/[1.5rem] px-2 rounded font-customMedium tracking-[-1%]'
    >
      {content}
    </span>
  )
}

interface BlockChainStepSeedPhraseProps {
  autoSeedPhrase: Array<string>
  customSeedphrase: string
  setCustomSeedphrase: Dispatch<SetStateAction<string>>
  onBack: () => void
  onNext: () => void
}

const BlockChainStepSeedPhrase = ({
  autoSeedPhrase,
  customSeedphrase,
  setCustomSeedphrase,
  onBack,
  onNext
}: BlockChainStepSeedPhraseProps) => {
  const [error, setError] = useState<string>('')

  const handlePaste = useCallback(async () => {
    const text = await navigator.clipboard.readText()
    setCustomSeedphrase(text)
  }, [])

  const handleDownloadSP = useCallback(async () => {
    const blob = new Blob([customSeedphrase], { type: 'text/plain' })
    const anchor = document.createElement('a')
    anchor.href = URL.createObjectURL(blob)
    anchor.download = 'seedphrase.txt'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }, [customSeedphrase])

  console.log('customSeedphrase', customSeedphrase.split(' '), customSeedphrase.split(' ').length)

  const handleNext = useCallback(() => {
    if (customSeedphrase !== '' && customSeedphrase.split(' ').length !== 24) {
      setError('Invalid number of seed phrase!')
    } else {
      onNext()
    }
  }, [customSeedphrase])

  return (
    <>
      <div className='flex flex-col gap-3 mt-3 text-[#0D0D0D]'>
        <span className='font-customSemiBold text-[1.25rem]/[1.625rem]'>Create with Seed Phrase!</span>
        <span className='text-[0.875rem]/[1.375rem] text-[#0D0D0D]/[.64]'>
          Please save these 24 words on a piece of paper. This seed will allow you to sign in your account.
        </span>
      </div>

      <Container className='py-5 flex flex-col gap-5 text-[#0D0D0D] overflow-hidden grow'>
        <div className='flex gap-2 flex-wrap'>
          {autoSeedPhrase.map((seed, i) => {
            return (
              <ItemSeedPhrase
                content={seed}
                key={i}
                onClick={() => setCustomSeedphrase((prev) => (prev.trim() ? `${prev.trim()} ${seed}` : seed))}
              />
            )
          })}
        </div>

        <div className='w-full h-[1px] bg-[#0D0D0D]/[.12]' />

        <div className='w-full bg-white text-[1rem]/[1.5rem] rounded-lg relative border-[1px] border-solid border-[#F8F8F9]'>
          <textarea
            className='w-full h-full bg-transparent p-3 min-h-[100px] '
            placeholder='Custom your seed phrase'
            value={customSeedphrase}
            onChange={(e) => {
              setError('')
              setCustomSeedphrase(e.target.value)
            }}
          />
          {customSeedphrase === '' && (
            <img src={ic_paste} className='w-6 h-6 absolute top-2 right-2' onClick={handlePaste} />
          )}
        </div>
        {error && <div className='text-red-500 text-[0.8rem]'>{error}</div>}
        <button className='mt-auto flex items-center justify-center gap-2' onClick={handleDownloadSP}>
          <span className='text-[16px]/[26px]'>Save your QR code in your device</span>
          <SaveIcon />
        </button>
      </Container>

      <ButtonBottom title='Continue' onBack={onBack} onNext={handleNext} />
    </>
  )
}

export default BlockChainStepSeedPhrase
