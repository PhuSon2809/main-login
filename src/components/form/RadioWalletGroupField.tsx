import { useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { EffectCreative, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import images from '~/assets'
import { IconButton } from '~/components/iconButton'
import './styles.scss'

interface RadioWalletGroupFieldProps {
  name: string
  rules?: Partial<Record<string, unknown>>
  disabled?: boolean
  required?: boolean
  className?: string | null
  helperText?: string
  defaultValue?: string
  options: { value: number; cardId: string; nameCard: string; balance: string }[]
}

function RadioWalletGroupField({
  name,
  rules = {},
  disabled = false,
  required = false,
  helperText,
  defaultValue = '',
  options
}: RadioWalletGroupFieldProps) {
  const swiperWalletRef = useRef<any>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        return (
          <div className={`flex flex-col gap-1`}>
            <div className='flex items-center gap-5'>
              <div
                ref={prevRef}
                onClick={() => {
                  swiperWalletRef.current?.swiper.slidePrev()
                }}
              >
                <IconButton size='48' className='xs:hidden sm:flex'>
                  <img src={images.icons.arrow_left} alt='arrow-left' />
                </IconButton>
              </div>
              <div className='xs:hidden sm:flex list-wallet xs:w-[358px] sm:w-[560px]'>
                <Swiper
                  ref={swiperWalletRef}
                  loop
                  grabCursor
                  effect={'creative'}
                  slidesPerView={1}
                  initialSlide={3}
                  freeMode={true}
                  creativeEffect={{
                    perspective: true,
                    limitProgress: 3,
                    prev: {
                      translate: ['-55px', 0, 0],
                      rotate: [0, 0, 0],
                      origin: 'bottom'
                    },
                    next: {
                      translate: ['55px', 0, 0],
                      rotate: [0, 0, 0],
                      origin: 'bottom'
                    }
                  }}
                  modules={[EffectCreative, Navigation]}
                  navigation={{
                    prevEl: prevRef.current ? prevRef.current : undefined,
                    nextEl: nextRef.current ? nextRef.current : undefined
                  }}
                  onInit={(swiper) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.prevEl = prevRef.current
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.update()
                  }}
                >
                  <SwiperSlide>
                    <div
                      className={`card xs:w-[318px] sm:w-[469px] xs:h-[189px] sm:h-[280px] relative xs:rounded-[15.16px] sm:rounded-[22.4px] overflow-hidden  bg-gradient-to-br from-[#FFFFFF] to-[#000]/[.01]`}
                    >
                      <p className='text-[22px] font-customMedium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                        + Add a new wallet
                      </p>
                      <img src={images.checkout.bg_add_wallet} alt='line-group' className='absolute inset-0' />
                    </div>
                  </SwiperSlide>
                  {options.map((option, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`card xs:w-[318px] sm:w-[469px] xs:h-[189px] sm:h-[280px] relative xs:rounded-[15.16px] sm:rounded-[22.4px] overflow-hidden  ${index === 0 ? 'bg-gradient-to-br from-[#FF9432] to-[#CB2C2C]' : 'bg-gradient-to-r from-greenMain to-blueMain'}`}
                      >
                        <div className='h-full xs:p-5 sm:p-6 absolute inset-0 z-10 text-white flex flex-col justify-between'>
                          <div>
                            <div className='xs:text-[14px] sm:text-[22px] font-customSemiBold uppercase'>
                              {option.nameCard}
                            </div>
                            <div className='text-white/[68%] xs:text-[16px] sm:text-[20px] font-customMedium xs:mt-1 sm:mt-5'>
                              {option.cardId}
                            </div>
                          </div>
                          <div className='xs:text-[26px] sm:text-[40px] font-customSemiBold text-white'>
                            ${option.balance}
                          </div>
                        </div>
                        <img
                          src={images.image.line_group}
                          alt='line-group'
                          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        />
                        <input
                          {...field}
                          type='radio'
                          required={required}
                          disabled={disabled}
                          value={option.value}
                          onChange={(e) => {
                            const value = e.target.value
                            field.onChange(value)
                          }}
                          checked={+field.value === option.value}
                          className='appearance-none size-6 flex items-center justify-center border-[2px] border-solid rounded-full checked:bg-blackMain checked:z-10
                                   checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
                                   checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[3px] checked:after:left-[7px] hover:shadow-avatar transition-all duration-300 ease-linear cursor-pointer absolute top-[8%] right-[4%] z-20'
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='xs:flex sm:hidden list-wallet xs:w-[358px] sm:w-[560px]'>
                <Swiper
                  loop
                  grabCursor
                  effect={'creative'}
                  slidesPerView={1}
                  initialSlide={3}
                  freeMode={true}
                  creativeEffect={{
                    perspective: true,
                    limitProgress: 3,
                    prev: {
                      translate: ['-20px', 0, 0],
                      rotate: [0, 0, 0],
                      origin: 'bottom'
                    },
                    next: {
                      translate: ['20px', 0, 0],
                      rotate: [0, 0, 0],
                      origin: 'bottom'
                    }
                  }}
                  modules={[EffectCreative, Navigation]}
                  navigation={{
                    prevEl: prevRef.current ? prevRef.current : undefined,
                    nextEl: nextRef.current ? nextRef.current : undefined
                  }}
                  onInit={(swiper) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.prevEl = prevRef.current
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.update()
                  }}
                >
                  <SwiperSlide>
                    <div
                      className={`card xs:w-[318px] sm:w-[469px] xs:h-[189px] sm:h-[280px] relative xs:rounded-[15.16px] sm:rounded-[22.4px] overflow-hidden  bg-gradient-to-br from-[#FFFFFF] to-[#000]/[.01]`}
                    >
                      <p className='text-[22px] font-customMedium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                        + Add a new wallet
                      </p>
                      <img src={images.checkout.bg_add_wallet} alt='line-group' className='absolute inset-0' />
                    </div>
                  </SwiperSlide>
                  {options.map((option, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          className={`card xs:w-[318px] sm:w-[469px] xs:h-[189px] sm:h-[280px] relative xs:rounded-[15.16px] sm:rounded-[22.4px] overflow-hidden  ${index === 0 ? 'bg-gradient-to-br from-[#FF9432] to-[#CB2C2C]' : 'bg-gradient-to-r from-greenMain to-blueMain'}`}
                        >
                          <div className='h-full xs:p-5 sm:p-6 absolute inset-0 z-10 text-white flex flex-col justify-between'>
                            <div>
                              <div className='xs:text-[14px] sm:text-[22px] font-customSemiBold uppercase'>
                                {option.nameCard}
                              </div>
                              <div className='text-white/[68%] xs:text-[16px] sm:text-[20px] font-customMedium xs:mt-1 sm:mt-5'>
                                {option.cardId}
                              </div>
                            </div>
                            <div className='xs:text-[26px] sm:text-[40px] font-customSemiBold text-white'>
                              ${option.balance}
                            </div>
                          </div>
                          <img
                            src={images.image.line_group}
                            alt='line-group'
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                          />
                          <input
                            {...field}
                            type='radio'
                            required={required}
                            disabled={disabled}
                            value={option.value}
                            onChange={(e) => {
                              const value = e.target.value
                              field.onChange(value)
                            }}
                            checked={+field.value === option.value}
                            className='appearance-none size-6 flex items-center justify-center border-[2px] border-solid rounded-full checked:bg-blackMain checked:z-10
                                   checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
                                   checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[3px] checked:after:left-[7px] hover:shadow-avatar transition-all duration-300 ease-linear cursor-pointer absolute top-[8%] right-[4%] z-20'
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
              <div
                ref={nextRef}
                onClick={() => {
                  swiperWalletRef.current?.swiper.slideNext()
                }}
              >
                <IconButton size='48' className='xs:hidden sm:flex'>
                  <img src={images.icons.arrow_right} alt='arrow-right' />
                </IconButton>
              </div>
            </div>

            {helperText && (
              <div className='h-[18px]'>
                <p className='mt-2 text-[14px] text-gray-400'>{helperText}</p>
              </div>
            )}
            <div className='h-[18px]'>
              <p className='mt-2 text-[14px] text-red-500'>{fieldState.error && fieldState.error.message}</p>
            </div>
          </div>
        )
      }}
    />
  )
}

export default RadioWalletGroupField
