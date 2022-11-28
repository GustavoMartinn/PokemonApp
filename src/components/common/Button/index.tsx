import { ButtonHTMLAttributes, FC } from 'react'
import { CommonButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <div>
    <CommonButton {...rest}>{children}</CommonButton>
  </div>
)
