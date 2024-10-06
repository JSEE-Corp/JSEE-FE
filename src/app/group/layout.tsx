import React from 'react'

import GNB from '@/component/GNB'

import styles from './layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.layout}>
			<div className={styles.max1200}>
				<GNB />

				{children}
			</div>
		</div>
	)
}
