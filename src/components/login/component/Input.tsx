import { useCallback } from 'react'
import ic_delete from '~/assets/icons/close.svg'
import ic_paste from '~/assets/icons/paste.svg'

interface InputProps {
  placeholder: string
  value?: string
  onInputChange: (e: any) => void
}

const Input = ({ placeholder, value, onInputChange }: InputProps) => {
  const handlePaste = useCallback(async () => {
    const text = await navigator.clipboard.readText()
    onInputChange({ target: { value: text } })
  }, [])

  const handleRemove = useCallback(async () => {
    onInputChange({ target: { value: '' } })
  }, [])

  return (
    <div className='w-full bg-[#FFFFFF] flex items-center relative rounded-lg'>
      <input
        className='bg-transparent focus:outline-none p-3 rounded-lg grow text-[1rem]'
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
      {value === '' ? (
        <img src={ic_paste} className='w-6 h-6 mx-3' onClick={handlePaste} />
      ) : (
        <img src={ic_delete} className='w-4 h-4 mx-3' onClick={handleRemove} />
      )}
    </div>
  )
}

export default Input
