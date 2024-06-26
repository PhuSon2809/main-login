import ic_success from '~/assets/icons/ic_success.svg'
import ic_delete from '~/assets/icons/close.svg'

interface ModalSuccessProps {
  onClose: () => void
}

const ModalSuccess = ({ onClose }: ModalSuccessProps) => {
  return (
    <div className='fixed w-[113%] h-[110%] -left-5 -top-5 flex justify-center items-center bg-white/[.22]'>
      <div className='w-[90%] flex flex-col items-center gap-3 py-10 bg-white/80 rounded-3xl relative'>
        <img src={ic_success} className='w-[120px] h-[120px]' />
        <span className='font-customBold text-[#1E1B39] text-[18px]/[22px]'>Success!</span>
        <span className='text-[#1E1B39]/[.68] text-[1rem]/[1.625rem]'>Create wallet successfully!</span>
        <img src={ic_delete} className='absolute w-4 h-4 top-5 right-5' onClick={onClose} />
      </div>
    </div>
  )
}

export default ModalSuccess
