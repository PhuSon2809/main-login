const ChevronDown = ({ color = 'black', className }: { color?: string; className?: string }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.0009 13.7473L7.46527 9.24954C7.12914 8.91664 6.58702 8.91664 6.25089 9.24954C6.09032 9.40817 6 9.62453 6 9.85021C6 10.0759 6.09032 10.2922 6.25089 10.4509L11.3928 15.5493C11.7286 15.8833 12.2714 15.8833 12.6072 15.5493L17.7491 10.4511C17.9097 10.2922 18 10.0759 18 9.85021C18 9.62453 17.9097 9.40817 17.7491 9.24933C17.4129 8.91664 16.8708 8.91664 16.5347 9.24975L12.0009 13.7473Z'
        fill={color}
      />
    </svg>
  )
}

export default ChevronDown
