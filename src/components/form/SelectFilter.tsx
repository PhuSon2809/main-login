import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'
import { OptionSelect } from '~/@types/common'
import { CheckIcon, ChevronDown, CloseIcon, SortIcon } from '~/components/icons'

type SelectFilterProps = {
  label?: string
  className?: string
  isSortBy?: boolean
  isTransparent?: boolean
  isSelectQuantity?: boolean
  options: OptionSelect[]
  selected: OptionSelect
  setSelected: Dispatch<SetStateAction<OptionSelect>>
  leftIcon?: ReactNode
  maxHeight?: string
}

function SelectFilter({
  label,
  className,
  isSortBy = false,
  isTransparent = false,
  isSelectQuantity = false,
  options,
  selected,
  setSelected,
  leftIcon,
  maxHeight
}: SelectFilterProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='relative'>
          <ListboxButton
            className={`relative xs:min-w-[130px] sm:min-w-[180px] min-h-10 rounded-md ${isTransparent || isSelectQuantity ? 'bg-transparent' : 'bg-white shadow-sm ring-1 ring-inset ring-blackMain/[.22] focus:ring-[1.5px] focus:ring-blackMain/[.30] hover:ring-[1.5px] hover:ring-blackMain/[.30]'} ${isSelectQuantity ? 'pl-0' : 'pl-3'} py-1.5 xs:pr-8 sm:pr-10 text-left transition-colors ease-in-out duration-300 ${className}`}
          >
            <div className='flex items-center gap-2'>
              {leftIcon && leftIcon}
              {isSortBy && (
                <>
                  <SortIcon className='xs:size-[18px] sm:size-5' />
                  <div className='h-6 border-0 border-r-[1px] border-solid border-blackMain/[.1]' />
                </>
              )}
              <span
                className={`xs:text-[12px] ${isSelectQuantity ? 'sm:text-[16px]' : 'sm:text-[14px]'} font-customRegular text-blackMain/[.64] text-nowrap`}
              >
                {label && `${label}:`}{' '}
                <span
                  className={`xs:text-[14px]  truncate ${isTransparent ? 'sm:text-[14px] text-white' : isSelectQuantity ? 'sm:text-[16px] text-blackMain font-customSemiBold' : 'sm:text-[16px] text-blackMain font-customSemiBold'}`}
                >
                  {selected.label}
                </span>
              </span>
            </div>
            {selected.value !== '' && (
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  // setSelected({ value: '', label: '' })
                }}
                className='absolute inset-y-0 right-5 flex items-center pr-2'
              >
                <CloseIcon className='size-2' color={isTransparent ? 'white' : isSelectQuantity ? 'black' : 'black'} />
              </span>
            )}
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <ChevronDown className='size-4' color={isTransparent ? 'white' : isSelectQuantity ? 'black' : 'black'} />
            </span>
          </ListboxButton>

          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions
              className={`absolute z-10 mt-1 ${maxHeight ? maxHeight : 'max-h-56'} w-full py-1 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 scroll-bar-small`}
            >
              {options.map((option, index) => (
                <ListboxOption
                  value={option}
                  key={index}
                  className={`${selected.value === option.value ? 'bg-greyMain' : 'bg-white'} hover:bg-greyMain cursor-pointer select-none py-2 px-3 flex items-center justify-between`}
                >
                  <span
                    className={`${selected.value === option.value ? 'font-customMedium' : 'font-customRegular'} block truncate`}
                  >
                    {option.label}
                  </span>
                  {selected.value === option.value && <CheckIcon />}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default SelectFilter
