import React from 'react'

import Icon from '@/component/base/icon'

import styles from './test.module.scss'

const Test = () => {
	return (
		<div className={styles.main}>
			<Icon path='flower' alt='flower' className={styles.test} />
			<Icon path='search' alt='search' className={styles.test} />
			<Icon path='bubble' alt='bubble' className={styles.test} />
			<Icon path='x' alt='x' className={styles.test} />
			<Icon path='edit' alt='edit' className={styles.test} />
			<Icon path='delete' alt='delete' className={styles.test} />
			<Icon path='empty' alt='empty' className={styles.test} />
			<Icon path='calender' alt='calender' className={styles.test} />
		</div>
	)
}

export default Test
