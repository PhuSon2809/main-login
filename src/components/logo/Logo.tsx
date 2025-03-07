import React from 'react'

function Logo({ isChangeColor, className }: { isChangeColor?: boolean; className?: string }) {
  const gradientId0 = React.useId()
  const gradientId1 = React.useId()
  const gradientId2 = React.useId()
  const gradientId3 = React.useId()

  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M67.7963 72.5976C66.7853 75.1256 59.2701 92.9918 47.6434 93.3334H38.2073C33.6577 93.3334 29.9844 89.6099 29.9844 84.9981V75.0231C29.9844 74.3057 30.8606 73.9982 31.2987 74.5448C32.613 76.1504 34.5339 77.2094 36.6571 77.346C36.8256 77.346 37.0278 77.346 37.1963 77.346H60.6855C63.786 77.346 66.5831 75.433 67.7626 72.5635L67.7963 72.5976Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <path
        opacity='0.38'
        d='M67.7971 72.5977C66.8197 75.0231 59.8437 91.6254 48.9922 93.231V77.3802H60.72C63.8204 77.3802 66.6175 75.4672 67.7971 72.5977Z'
        fill={`url(#${gradientId0})`}
      />
      <path
        d='M70.8631 19.7163C61.1574 13.5331 46.0259 25.3529 43.7679 27.1976L25.5023 40.657C23.5139 42.1259 22.0311 44.4147 21.9974 46.806C20.5146 40.9303 17.886 26.5143 25.8056 20.707L41.51 9.12635C45.9585 5.84688 52.0245 5.84688 56.473 9.12635L70.8631 19.7163Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <path
        opacity='0.38'
        d='M40.3638 29.6228L25.4682 40.5885C23.4798 42.0575 21.997 44.3463 21.9633 46.7375C21.2893 44.0046 20.3457 39.3929 20.3457 34.6787C20.3457 29.2812 21.5589 23.7471 25.8052 20.6385L31.1973 16.6758L40.3975 29.657L40.3638 29.6228Z'
        fill={`url(#${gradientId1})`}
      />
      <path
        d='M92.6679 46.8056L86.8715 64.8769C89.9045 53.7062 74.3349 41.9889 72.6499 40.7591C72.6499 40.7591 72.5824 40.725 72.5487 40.6908L53.5417 26.6848C50.8456 24.7034 47.206 24.7034 44.5436 26.6848L43.8359 27.2313C46.0939 25.3866 61.2254 13.5669 70.9311 19.7501L88.0847 32.3897C92.5331 35.6691 94.4204 41.5107 92.7016 46.8398L92.6679 46.8056Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <path
        opacity='0.38'
        d='M73.0885 21.3556L63.349 33.9269L53.5085 26.6848C50.8124 24.7034 47.1728 24.7034 44.5104 26.6848L43.8027 27.2313C46.0607 25.3866 61.1922 13.5669 70.8979 19.7501L73.1222 21.3898L73.0885 21.3556Z'
        fill={`url(#${gradientId2})`}
      />
      <path
        d='M86.8714 64.877L80.6031 84.383C78.8844 89.7121 73.9978 93.299 68.5046 93.299H47.6777C59.3044 92.9574 66.8196 75.0911 67.8306 72.5632C67.8306 72.5291 67.8306 72.4949 67.8643 72.4607C67.8643 72.4607 67.8643 72.3924 67.8643 72.3583C67.8643 72.2899 67.898 72.2558 67.898 72.2558C67.9317 72.1533 67.9654 72.0508 67.9991 71.9483L75.2447 49.2995C76.2557 46.1567 75.1773 42.7064 72.6161 40.7251C74.3011 41.9549 89.8707 53.6721 86.8377 64.8428L86.8714 64.877Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <path
        opacity='0.38'
        d='M86.8699 64.877L86.0948 67.3024L71.334 61.7L75.2769 49.3337C76.288 46.1909 75.2095 42.7406 72.6483 40.7593C74.3333 41.9891 89.9029 53.7063 86.8699 64.877Z'
        fill={`url(#${gradientId3})`}
      />
      <path
        d='M21.9641 46.7378V70.5822H17.1786C11.3484 70.5822 6.66406 65.7997 6.66406 59.924V38.7441V38.6758C6.66406 36.4553 7.60768 34.2348 9.69711 32.6293C9.79821 32.5609 9.86561 32.4926 9.96671 32.4243L28.8053 18.4866C18.3244 26.207 22.4696 43.4242 21.9641 46.7378Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <path
        d='M54.3179 38.2659L40.6018 52.8868L47.8474 53.6042L39.793 67.337L58.0249 51.008L49.1954 50.3247L54.3179 38.2659Z'
        fill={isChangeColor ? '#31D366' : 'white'}
        className='transition-colors duration-1000 ease-linear'
      />
      <defs>
        <linearGradient
          id={gradientId0}
          x1='64.2922'
          y1='82.9143'
          x2='53.2721'
          y2='82.9143'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id={gradientId1}
          x1='19.8065'
          y1='36.4892'
          x2='30.3123'
          y2='29.2444'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id={gradientId2}
          x1='52.6323'
          y1='20.4333'
          x2='63.5353'
          y2='27.3359'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id={gradientId3}
          x1='81.1408'
          y1='49.4362'
          x2='76.8627'
          y2='60.1573'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
