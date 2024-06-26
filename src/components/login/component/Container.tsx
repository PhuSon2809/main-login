import classNames from 'classnames'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={classNames(className, 'w-full grow')}>{children}</div>
}

export default Container
