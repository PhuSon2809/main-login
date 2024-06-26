function EditIcon({ color = '#0D0D0D', className }: { color?: string; className?: string }) {
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
        d='M17.5762 2.41061C17.3436 2.17494 17.0664 1.98782 16.7609 1.86011C16.4554 1.73239 16.1275 1.66663 15.7964 1.66663C15.4652 1.66663 15.1374 1.73239 14.8318 1.86011C14.5263 1.98782 14.2492 2.17494 14.0165 2.41061L12.4159 4.03623L15.9506 7.57089L17.5512 5.97029C17.7885 5.73931 17.9776 5.4635 18.1075 5.15886C18.2373 4.85423 18.3054 4.52683 18.3077 4.19568C18.31 3.86452 18.2466 3.53621 18.121 3.22978C17.9954 2.92334 17.8103 2.6449 17.5762 2.41061ZM11.2322 5.22001L4.23785 12.2143C4.17514 12.2788 4.12182 12.3517 4.07945 12.4311L1.76191 17.1078C1.69468 17.2341 1.66105 17.3755 1.66427 17.5185C1.66749 17.6615 1.70745 17.8012 1.78029 17.9243C1.85314 18.0474 1.95643 18.1497 2.08023 18.2213C2.20403 18.2929 2.34417 18.3315 2.48719 18.3333C2.61421 18.3338 2.73967 18.3053 2.85399 18.2499L7.53076 15.9324C7.61008 15.89 7.68304 15.8367 7.7475 15.774L14.7418 8.77968L11.2322 5.22001ZM17.4928 18.3333H9.99002C9.76892 18.3333 9.55688 18.2455 9.40054 18.0891C9.2442 17.9328 9.15637 17.7207 9.15637 17.4996C9.15637 17.2785 9.2442 17.0665 9.40054 16.9102C9.55688 16.7538 9.76892 16.666 9.99002 16.666H17.4928C17.7139 16.666 17.926 16.7538 18.0823 16.9102C18.2387 17.0665 18.3265 17.2785 18.3265 17.4996C18.3265 17.7207 18.2387 17.9328 18.0823 18.0891C17.926 18.2455 17.7139 18.3333 17.4928 18.3333Z'
        fill={color}
      />
    </svg>
  )
}

export default EditIcon
