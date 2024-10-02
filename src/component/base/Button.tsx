import React, { ButtonHTMLAttributes } from 'react'

import { clc } from '@/utils/classComposer'

import styles from './button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	light?: boolean
	dark?: boolean
}

const Button = ({ children, className, light = false, dark = false, ...props }: Props) => {
	const buttonStyle = light ? styles.light : styles.dark

	return (
		<button {...props} className={clc(styles.button, buttonStyle, className)}>
			{children}
		</button>
	)
}

export default Button
