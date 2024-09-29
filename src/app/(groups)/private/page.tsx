import React from 'react'

import CardForMemory from '@/component/CardForMemory'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.private}>
			<div className={styles.cardContainer}>
				{[...Array(24)].map((_, index) => (
					<CardForMemory key={index} isPrivate />
				))}
			</div>
		</section>
	)
}

export default page
