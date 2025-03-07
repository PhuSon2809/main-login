import React from 'react'

const NavCategoryIcon = ({
  color,
  className
}: {
  color?: 'black' | 'white' | 'linear' | string
  className?: string
}) => {
  const gradientId1 = React.useId()

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001ZM21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z'
        fill={`url(#${gradientId1})`}
      />
      <defs>
        <linearGradient id={gradientId1} x1='23' y1='7.74704' x2='1' y2='7.74704' gradientUnits='userSpaceOnUse'>
          <stop
            stopColor={
              color === 'black' ? '#0D0D0D' : color === 'white' ? 'white' : color === 'linear' ? '#5495FC' : color
            }
          />
          <stop offset='1' stopColor={color === 'black' ? '#0D0D0D' : color === 'linear' ? '#31D366' : color} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default NavCategoryIcon
