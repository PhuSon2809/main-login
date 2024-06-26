import { MdKeyboardArrowRight } from 'react-icons/md'
import classNames from 'classnames'

interface ButtonLoginProps {
  className?: string
  icon: string
  content: string
  onClick: (e: any) => void
}

const ButtonLogin = (props: ButtonLoginProps) => {
  const { className, icon, content, onClick } = props

  return (
    <div
      className={classNames(
        className,
        'w-full h-[84px] px-3 flex justify-between items-center bg-white rounded-[8.4px] hover:cursor-pointer'
      )}
      onClick={onClick}
    >
      <div className='flex items-center gap-3'>
        <img src={icon} className='w-10 h-10 object-cover' />
        <span className='font-customBold text-[1rem]/[16.8px]'>{content}</span>
      </div>
      <MdKeyboardArrowRight className='text-[1.5rem] text-[#31D366]' />
    </div>
  )
}

export default ButtonLogin
