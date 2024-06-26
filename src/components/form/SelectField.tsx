import { Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'

import { OptionSelect } from '~/@types/common'
import images from '~/assets'

interface SelectFieldProps {
  name: string
  label?: string
  rules?: Record<string, unknown>
  options: OptionSelect[]
  width?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string | null
  classNameLabel?: string | null
  required?: boolean
  helperText?: string
  placeholder?: string
  variant?: 'outline' | 'container'
  size?: 'small' | 'medium'
}

function SelectField({
  name,
  label,
  rules = {},
  options = [],
  width,
  disabled = false,
  fullWidth = false,
  helperText,
  placeholder,
  classNameLabel = null,
  variant = 'outline',
  size = 'medium'
}: SelectFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => {
        return (
          <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
            <div className='flex flex-col xs:gap-2 sm:gap-3'>
              {label && (
                <label
                  htmlFor={name}
                  className={`${size === 'small' ? 'text-[16px]' : 'xs:text-[18px] sm:text-[20px]'} font-customSemiBold capitalize ${disabled && 'text-blackMain/[.32]'} ${classNameLabel}`}
                >
                  {label}
                </label>
              )}

              <Listbox
                disabled={disabled}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value?.value)
                }}
              >
                {({ open }) => (
                  <div className='relative'>
                    <ListboxButton
                      {...field}
                      className={`relative w-full ${size === 'small' ? 'h-[48px]' : 'xs:h-11 sm:h-[52px]'}  py-1.5 pl-3 pr-10 shadow-sm ${
                        variant === 'outline'
                          ? `${
                              disabled ? 'bg-blackMain/[.03]' : 'bg-white'
                            } border-[1px] border-solid border-blackMain/[.22] rounded-[30px]`
                          : `${disabled ? 'bg-blackMain/[.03]' : 'bg-greyLight'} rounded-lg`
                      } focus:outline-none ${
                        variant === 'outline'
                          ? `focus:ring-[1.5px] focus:ring-blackMain/[.30] ${
                              disabled ? '' : 'hover:ring-[1.5px] hover:ring-blackMain/[.30]'
                            }  xs:rounded-[30px] sm:rounded-[32px]`
                          : `focus:bg-blackMain/[.05] ${disabled ? '' : 'hover:bg-blackMain/[.05]'}  rounded-[8px]`
                      }`}
                    >
                      <span className='flex items-center'>
                        <span
                          className={`ml-3 block truncate ${field.value ? 'text-blackMain' : 'text-blackMain/[.64]'} ${disabled && 'text-blackMain/[.32]'}`}
                        >
                          {field.value
                            ? options.find((o) => o.value === field.value)?.label
                            : placeholder
                              ? placeholder
                              : 'Select'}
                        </span>
                      </span>
                      <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3'>
                        <img
                          src={images.icons.chevron_bot}
                          alt='icon-arrow'
                          className={`${disabled && 'opacity-[.32]'}`}
                        />
                      </span>
                    </ListboxButton>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <ListboxOptions
                        className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                      >
                        {options.map((option, index) => (
                          <ListboxOption
                            key={index}
                            value={option}
                            className={`relative select-none py-2 pl-3 pr-9 ${option.value === field.value ? 'bg-blackMain/[.20] text-white' : ''} hover:bg-blackMain/[.30] hover:text-white transition-colors ease-in-out duration-300`}
                          >
                            <span
                              className={`block truncate tracking-wide ${option.value === field.value ? 'font-customSemiBold' : 'font-customRegular'}`}
                            >
                              {option.label}
                            </span>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </div>
                )}
              </Listbox>
            </div>

            {helperText && (
              <div className='min-h-[18px]'>
                <p className='ml-2 xs:text-[13px] sm:text-[14px] text-gray-400'>{helperText}</p>
              </div>
            )}
            <div className='min-h-[18px]'>
              <p className='ml-2 xs:text-[13px] sm:text-[14px] text-red-500'>
                {fieldState.error && fieldState.error.message}
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

export default SelectField
