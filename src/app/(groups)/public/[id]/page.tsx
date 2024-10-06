import React from 'react'

import GroupInfo from './_/GroupInfo'
import MemoryList from './_/MemoryList'

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
