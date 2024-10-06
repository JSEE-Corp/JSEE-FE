import React from 'react'

import Card from '@/component/Card'
import CreateButton from '@/component/CreateButton'
import FilterBar from '@/component/FilterBar'
import More from '@/component/More'

import styles from './page.module.scss'

const page = () => {
	return (
		<>
			<FilterBar initialSelected='public' forLink />
			<CreateButton link='/group/add' text='그룹 만들기' />

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
							tags={['해커톤', '개발', '팀워크']}
							place='서울 스타트업 허브'
							date='2024.03.15'
							likes={42}
							comments={7}
						/>
					))}
				</div>

				<More />
			</section>
		</>
	)
}

export default page
