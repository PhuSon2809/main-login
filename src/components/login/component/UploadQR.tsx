import { SaveIcon } from '~/components/icons'

function UploadQR({ hideOr }: { hideOr?: boolean }) {
  return (
    <div className='w-full flex flex-col items-center gap-5'>
      {!hideOr && (
        <div className='flex items-center gap-2'>
          <div className='w-[67px] h-[1px] bg-black/[.10]' />
          <p className='text-[16px]/[26px] font-customSemiBold tracking-[1%]'>QR</p>
          <div className='w-[67px] h-[1px] bg-black/[.10]' />
        </div>
      )}

      <div className='w-full min-h-[135px] p-3 flex flex-col justify-between items-center rounded-[8.4px] border-[2px] border-dotted border-blackMain/[.22]'>
        <div className='flex flex-col items-center'>
          <SaveIcon />
          <p className='text-[16px]/[27.3px] tracking-[1%] font-customMedium'>Input with QR code</p>
        </div>

        <div className='w-full flex items-center gap-1 text-[14px] tracking-[1%]'>
          <button className='w-full h-[33px] rounded border-[1px] border-solid border-blackMain'>Scan QR code</button>
          <button className='w-full h-[33px] rounded border-[1px] border-solid border-blackMain'>Upload image</button>
        </div>
      </div>
    </div>
  )
}

export default UploadQR
