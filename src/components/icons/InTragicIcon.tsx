const InTragicIcon = ({ color, className }: { color: string; className?: string }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8351 14.5846C15.8393 14.5347 15.8393 14.4845 15.8351 14.4346C15.8351 13.9926 15.6595 13.5687 15.347 13.2561C15.0344 12.9435 14.6105 12.7679 14.1685 12.7679C13.7264 12.7679 13.3025 12.9435 12.99 13.2561C12.6774 13.5687 12.5018 13.9926 12.5018 14.4346C12.4977 14.4845 12.4977 14.5347 12.5018 14.5846C12.5018 15.0266 12.6774 15.4506 12.99 15.7631C13.3025 16.0757 13.7264 16.2513 14.1685 16.2513C14.6105 16.2513 15.0344 16.0757 15.347 15.7631C15.6595 15.4506 15.8351 15.0266 15.8351 14.5846ZM9.16847 14.5846C9.1726 14.5347 9.1726 14.4845 9.16847 14.4346C9.16847 13.9926 8.99287 13.5687 8.68031 13.2561C8.36775 12.9435 7.94383 12.7679 7.5018 12.7679C7.05977 12.7679 6.63585 12.9435 6.32329 13.2561C6.01073 13.5687 5.83513 13.9926 5.83513 14.4346C5.831 14.4845 5.831 14.5347 5.83513 14.5846C5.83513 15.0266 6.01073 15.4506 6.32329 15.7631C6.63585 16.0757 7.05977 16.2513 7.5018 16.2513C7.94383 16.2513 8.36775 16.0757 8.68031 15.7631C8.99287 15.4506 9.16847 15.0266 9.16847 14.5846Z'
        fill={color}
      />
      <path
        d='M2.91992 10.6262H1.66992C1.55517 10.626 1.44262 10.6577 1.34492 10.7179C1.26003 10.7702 1.18889 10.8421 1.13745 10.9276C1.08602 11.013 1.05577 11.1095 1.04925 11.209C1.04272 11.3086 1.0601 11.4082 1.09994 11.4996C1.13978 11.591 1.20092 11.6716 1.27826 11.7346C1.38733 11.8277 1.52651 11.8781 1.66992 11.8762H3.75326C3.91902 11.8762 4.07799 11.9421 4.1952 12.0593C4.31241 12.1765 4.37826 12.3355 4.37826 12.5012C4.37826 12.667 4.31241 12.826 4.1952 12.9432C4.07799 13.0604 3.91902 13.1262 3.75326 13.1262H2.91992C2.75416 13.1262 2.59519 13.1921 2.47798 13.3093C2.36077 13.4265 2.29492 13.5855 2.29492 13.7512C2.29492 13.917 2.36077 14.076 2.47798 14.1932C2.59519 14.3104 2.75416 14.3762 2.91992 14.3762H5.21992C5.25577 13.9524 5.41189 13.5477 5.66992 13.2096C5.88558 12.9273 6.16283 12.698 6.48055 12.5392C6.79826 12.3803 7.14805 12.2961 7.50326 12.2929C8.07572 12.2907 8.62813 12.5036 9.05103 12.8895C9.47392 13.2753 9.73645 13.806 9.78659 14.3762H11.8866C11.9355 13.8043 12.1972 13.2716 12.62 12.8834C13.0428 12.4952 13.5959 12.2798 14.1699 12.2798C14.7439 12.2798 15.297 12.4952 15.7198 12.8834C16.1426 13.2716 16.4044 13.8043 16.4533 14.3762H17.5866C17.7815 14.3802 17.9717 14.3156 18.124 14.1938C18.2762 14.072 18.381 13.9006 18.4199 13.7096L18.9699 10.9596C18.9656 10.9404 18.9656 10.9205 18.9699 10.9012C18.9817 10.8295 18.9817 10.7563 18.9699 10.6846L17.4033 6.06791C17.3179 5.82274 17.1578 5.61048 16.9456 5.46101C16.7333 5.31153 16.4795 5.23234 16.2199 5.23458H14.7199L14.8116 4.56791C14.834 4.39127 14.8187 4.21189 14.7666 4.04162C14.7145 3.87134 14.6269 3.71406 14.5096 3.58015C14.3922 3.44625 14.2478 3.33878 14.0858 3.26484C13.9238 3.19091 13.748 3.15219 13.5699 3.15125H4.16992C4.00416 3.15125 3.84519 3.21709 3.72798 3.3343C3.61077 3.45151 3.54492 3.61049 3.54492 3.77625C3.54492 3.94201 3.61077 4.10098 3.72798 4.21819C3.84519 4.3354 4.00416 4.40125 4.16992 4.40125H5.21159C5.37735 4.40125 5.53632 4.46709 5.65353 4.5843C5.77074 4.70151 5.83659 4.86049 5.83659 5.02625C5.83659 5.19201 5.77074 5.35098 5.65353 5.46819C5.53632 5.5854 5.37735 5.65125 5.21159 5.65125H1.66992C1.50483 5.6534 1.34711 5.71994 1.23037 5.83669C1.11362 5.95344 1.04708 6.11116 1.04492 6.27625C1.04469 6.43418 1.10507 6.58619 1.2136 6.70092C1.32213 6.81566 1.47055 6.88438 1.62826 6.89291H3.75326C3.91902 6.89291 4.07799 6.95876 4.1952 7.07597C4.31241 7.19318 4.37826 7.35215 4.37826 7.51791C4.37826 7.68367 4.31241 7.84264 4.1952 7.95985C4.07799 8.07706 3.91902 8.14291 3.75326 8.14291H2.36992C2.23099 8.17325 2.10655 8.25006 2.01716 8.36066C1.92777 8.47126 1.87877 8.60904 1.87826 8.75125C1.87826 8.91701 1.9441 9.07598 2.06131 9.19319C2.17852 9.3104 2.3375 9.37625 2.50326 9.37625H2.91992C3.08568 9.37625 3.24465 9.44209 3.36186 9.5593C3.47907 9.67651 3.54492 9.83549 3.54492 10.0012C3.54492 10.167 3.47907 10.326 3.36186 10.4432C3.24465 10.5604 3.08568 10.6262 2.91992 10.6262ZM14.5866 6.45958H16.1033C16.147 6.46024 16.1895 6.47413 16.2252 6.49942C16.2609 6.5247 16.2881 6.5602 16.3033 6.60125L17.5033 10.2096H14.0866L14.5866 6.45958Z'
        fill={color}
      />
    </svg>
  )
}

export default InTragicIcon
