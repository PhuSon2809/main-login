import { useState, useEffect } from 'react'
import BlockChainStepSeedPhrase from './component/BlockChainStepSeedPhrase'
import BlockChainStepName from './component/BlockChainStepName'
import { generateSeedphrase } from '~/utils/login'

interface CreateBlockChainProps {
  onBack: () => void
}

const CreateBlockChain = ({ onBack }: CreateBlockChainProps) => {
  const [step, setStep] = useState<number>(1)
  const [autoSeedPhrase, setAutoSeedPhrase] = useState<Array<string>>([])
  const [customSeedphrase, setCustomSeedphrase] = useState('')

  useEffect(() => {
    ;(async () => {
      const a = await generateSeedphrase()
      setAutoSeedPhrase(a)
      console.log('a', a)
    })()
  }, [])

  return (
    <>
      {step === 1 && (
        <BlockChainStepSeedPhrase
          autoSeedPhrase={autoSeedPhrase}
          customSeedphrase={customSeedphrase}
          setCustomSeedphrase={setCustomSeedphrase}
          onBack={() => onBack()}
          onNext={() => setStep(step + 1)}
        />
      )}
      {step === 2 && (
        <BlockChainStepName
          autoSeedPhrase={autoSeedPhrase}
          customSeedphrase={customSeedphrase}
          onBack={() => {
            setStep(step - 1)
          }}
          onNext={() => {}}
        />
      )}
    </>
  )
}

export default CreateBlockChain
