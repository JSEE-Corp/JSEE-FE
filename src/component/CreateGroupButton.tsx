import React from 'react'
import Link from 'next/link'

import Button from './base/Button'

import styles from './createGroupButton.module.scss'

const CreateGroupButton = () => {
	return (
		<div className={styles.createGroupButton}>
			<Link href='/group/add'>
				<Button className={styles.create} dark>
					그룹 만들기
				</Button>
			</Link>
		</div>
	)
}

export default CreateGroupButton
