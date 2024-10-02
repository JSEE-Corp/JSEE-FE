import React from 'react'

import GroupAddForm from './GroupAddForm'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.groupAdd}>
			<GroupAddForm />
		</section>
	)
}

export default page
