import React from 'react'

import AddGroupForm from './AddGroupForm'

import styles from './page.module.scss'

const page = () => {
	return (
		<section className={styles.groupAdd}>
			<AddGroupForm />
		</section>
	)
}

export default page
