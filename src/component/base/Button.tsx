import React, { ButtonHTMLAttributes } from 'react'

import { clc } from '@/utils/classComposer'

import styles from './button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
}

const Button = ({ children, className, ...props }: Props) => {
	return (
		<button {...props} className={clc(styles.button, className)}>
			{children}
		</button>
	)
}

export default Button
