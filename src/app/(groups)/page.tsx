import React from 'react'
import Image from 'next/image'

import Test from '@/app/Test'
import FillImg from '@/component/base/FillImg'
import CardForMemory from '@/component/CardForMemory'
import Item from '@/component/item'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.public}>
			<div className={styles.cardContainer}>
				{[...Array(12)].map((_, index) => (
					<CardForMemory key={index} isPublic />
				))}
			</div>
		</section>
	)
}

export default page
