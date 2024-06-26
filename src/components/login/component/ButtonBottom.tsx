import ic_back from '~/assets/icons/arrow-left.svg'

interface ButtonBottom {
  title: string
  onBack: () => void
  onNext: () => void
}

const ButtonBottom = ({ title, onBack, onNext }: ButtonBottom) => {
  return (
    <div className='flex w-full gap-3'>
      <button
        className='w-12 h-12 flex justify-center items-center rounded-full border border-solid border-[#00000038] hover:cursor-pointer'
        onClick={onBack}
      >
        <img src={ic_back} className='w-6 h-6' />
      </button>
      <button
        className='grow flex items-center justify-center uppercase bg-[#0D0D0D] text-[1.125rem] text-white rounded-[26px] hover:cursor-pointer'
        onClick={onNext}
      >
        {title}
      </button>
    </div>
  )
}

export default ButtonBottom
