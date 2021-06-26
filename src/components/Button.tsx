import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

/*significa que está adicionando todas as propriedades de um botão e também a
propriedade isOutlined que no caso é opcional  */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}
