import React from 'react'

import InfoCard from '@/component/InfoCard'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.publicView}>
			<InfoCard
				isGroup={true}
				isPublic={true}
				dday='D+100'
				title='달봉이네 가족'
				desc='서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.'
				memories={15}
				groupLikes={1500}
				badges={['👾 7일 연속 추억 등록', '🌼 그룹 공감 1만 개 이상 받기']}
			/>
		</section>
	)
}

export default page
