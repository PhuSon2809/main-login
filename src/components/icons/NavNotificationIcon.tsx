import React from 'react'

const NavNotificationIcon = ({
  color,
  className
}: {
  color?: 'black' | 'white' | 'linear' | string
  className?: string
}) => {
  const gradientId1 = React.useId()
  const gradientId2 = React.useId()

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_614_104)'>
        <path
          d='M15.5901 18.5999C15.5151 18.5295 15.4267 18.4751 15.3301 18.4399C15.2608 18.4253 15.1894 18.4253 15.1201 18.4399H8.87012C8.78741 18.4255 8.70283 18.4255 8.62012 18.4399C8.52577 18.4796 8.43808 18.5336 8.36011 18.5999C8.28896 18.6724 8.23134 18.7571 8.19007 18.8499C8.14799 18.9446 8.12429 19.0464 8.12012 19.15C8.11985 19.253 8.14025 19.3549 8.18012 19.4499C8.47662 20.2126 8.99988 20.8661 9.67938 21.3221C10.3589 21.7781 11.1619 22.0146 11.9801 21.9999C12.7966 22.0126 13.5974 21.775 14.2749 21.3192C14.9524 20.8633 15.4742 20.211 15.7701 19.4499C15.8099 19.3549 15.8303 19.253 15.8301 19.15C15.8296 19.047 15.8092 18.9451 15.7701 18.8499C15.7288 18.7546 15.6674 18.6693 15.5901 18.5999Z'
          fill={`url(#${gradientId1})`}
        />
        <path
          d='M20.2999 13.4299C19.8986 12.9537 19.648 12.369 19.5799 11.75L19.2199 8.63C19.0404 6.82767 18.2025 5.15476 16.8667 3.93152C15.5309 2.70828 13.791 2.02061 11.9799 2C10.1683 2.02255 8.42831 2.71072 7.09134 3.93335C5.75438 5.15598 4.91387 6.82765 4.72989 8.63L4.37986 11.75C4.31253 12.3711 4.05795 12.9569 3.64988 13.4299C3.31669 13.8198 3.10095 14.2963 3.02774 14.8038C2.95454 15.3114 3.02692 15.8294 3.23636 16.2975C3.44581 16.7656 3.78374 17.1647 4.21097 17.4484C4.63821 17.732 5.13717 17.8886 5.64988 17.9H18.3099C18.8218 17.8868 19.3194 17.7289 19.7452 17.4445C20.1709 17.1601 20.5074 16.7609 20.7157 16.2931C20.9239 15.8253 20.9954 15.3081 20.9218 14.8014C20.8482 14.2947 20.6326 13.8191 20.2999 13.4299Z'
          fill={`url(#${gradientId2})`}
        />
      </g>
      <defs>
        <clipPath id='clip0_614_104'>
          <rect width='17.94' height='20' fill='white' transform='translate(3 2)' />
        </clipPath>

        <linearGradient id={gradientId1} x1='23' y1='7.74704' x2='1' y2='7.74704' gradientUnits='userSpaceOnUse'>
          <stop
            stopColor={
              color === 'black' ? '#0D0D0D' : color === 'white' ? 'white' : color === 'linear' ? '#5495FC' : color
            }
          />
          <stop offset='1' stopColor={color === 'black' ? '#0D0D0D' : color === 'linear' ? '#31D366' : color} />
        </linearGradient>
        <linearGradient
          id={gradientId2}
          x1='20.8924'
          y1='15.7864'
          x2='3.09375'
          y2='15.7864'
          gradientUnits='userSpaceOnUse'
        >
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

export default NavNotificationIcon
