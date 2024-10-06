import React from 'react'

import GroupInfo from './GroupInfo'
import MemoryList from './MemoryList'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.publicView}>
			<GroupInfo />
			<hr style={{ width: '100%' }} />
			<MemoryList />
		</section>
	)
}

export default page
