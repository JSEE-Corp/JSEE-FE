import React, { ButtonHTMLAttributes } from 'react'

import { clc } from '@/utils/classComposer'

import styles from './tab.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	isPublic?: boolean
	isPrivate?: boolean
	selected?: boolean
}

const Tab = ({ className, isPrivate = false, isPublic = true, selected = false, ...props }: Props) => {
	return (
		<button {...props} className={clc(styles.tab, className, selected ? styles.selected : '')}>
			{isPrivate ? '비공개' : '공개'}
		</button>
	)
}

export default Tab
