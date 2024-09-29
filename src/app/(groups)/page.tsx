import React from 'react'
import Image from 'next/image'

import FillImg from '@/component/base/FillImg'
import Card from '@/component/Card'
import Item from '@/component/item'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.public}>
			<div className={styles.cardContainer}>
				{[...Array(12)].map((_, index) => (
					<Card
						key={index}
						isPublic
						forGroup
						dday='D+100'
						title='코딩 스터디 모임'
						desc='함께 성장하는 개발자 커뮤니티'
						badges={3}
						memories={15}
						groupLikes={250}
					/>
				))}

				{[...Array(12)].map((_, index) => (
					<Card
						key={index}
						isPublic
						forMemory
						author='김코딩'
						title='첫 번째 해커톤 참가'
						tags='해커톤,개발,팀워크'
						place='서울 스타트업 허브'
						date='2024.03.15'
						likes={42}
						comments={7}
					/>
				))}
			</div>
		</section>
	)
}

export default page
