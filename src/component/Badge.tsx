import React from 'react'

import { clc } from '@/utils/classComposer'

import styles from './badge.module.scss'

interface BadgeProps {
	content: string
	className?: string
}

const Badge = ({ content, className, ...props }: BadgeProps) => {
	return (
		<div {...props} className={clc(styles.badge, className)}>
			{content && <div className={styles.badgeContent}>{content}</div>}
		</div>
	)
}

export default Badge
