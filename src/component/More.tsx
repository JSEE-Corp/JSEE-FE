import React from 'react'

import Button from './base/Button'

import styles from './more.module.scss'

const More = () => {
	return (
		<Button className={styles.more} light>
			더보기
		</Button>
	)
}

export default More
