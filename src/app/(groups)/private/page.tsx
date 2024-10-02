import React from 'react'
import Link from 'next/link'

import Button from '@/component/base/Button'
import Card from '@/component/Card'
import CreateGroupButton from '@/component/CreateGroupButton'
import FilterBar from '@/component/FilterBar'
import More from '@/component/More'

import styles from './page.module.scss'

const page = () => {
	return (
		<>
			<FilterBar initialSelected='private' />
			<CreateGroupButton />

			<section className={styles.private}>
				<div className={styles.cardContainer}>
					{[...Array(12)].map((_, index) => (
						<Card
							key={index}
							isPrivate
							forGroup
							dday='D-5'
							title='프로젝트 기획팀'
							desc='신규 서비스 론칭 준비 중'
							badges={1}
							memories={8}
						/>
					))}

					{/* Private Memory Cards */}
					{[...Array(12)].map((_, index) => (
						<Card
							key={index}
							isPrivate
							forMemory
							author='이개발'
							title='개인 프로젝트 아이디어'
							tags='아이디어,기획,개발'
							likes={10}
							comments={5}
						/>
					))}
				</div>
				<More />
			</section>
		</>
	)
}

export default page
