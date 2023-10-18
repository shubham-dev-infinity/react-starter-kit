import cn from 'classnames';
import React from 'react'
import styles from './styles.module.scss'

type TButton = {
    children: React.ReactNode
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: TButton) => {
    return (
        <button type='button' className={cn(className, 'font-bold py-3 px-7 lg:py-2 lg:px-8 md:text-sm  border-white text-sm leading-5 bg-transparent', styles.error)} {...props}>
            {children}
        </button>
    )
}
