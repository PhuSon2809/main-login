import React from 'react'

const NavBoxIcon = ({ color, className }: { color?: 'black' | 'white' | 'linear' | string; className?: string }) => {
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
      <path
        d='M0 10.2615L8.66339 15.2215L10.9141 12.3976L1.79174 7.58098L0 10.2615ZM13.0617 12.3871L15.3207 15.2216L24 10.2524L22.1839 7.38539L13.0617 12.3871ZM3.10646 6.68595L11.9858 11.3743L20.8778 6.49877L12.0051 2.30769L3.10646 6.68595Z'
        fill={`url(#${gradientId1})`}
      />
      <path
        d='M2.26221 17.8488L11.2897 22.6154V14.1808L9.38641 16.5688C9.28192 16.7 9.1339 16.7895 8.96916 16.821C8.80443 16.8525 8.63385 16.824 8.48831 16.7406L2.26221 13.176V17.8488ZM12.6945 14.1808V22.5935L21.722 17.6368V13.1759L15.4959 16.7406C15.3504 16.8239 15.1798 16.8524 15.0151 16.8209C14.8504 16.7893 14.7024 16.6999 14.5978 16.5688L12.6945 14.1808Z'
        fill={`url(#${gradientId2})`}
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

export default NavBoxIcon
