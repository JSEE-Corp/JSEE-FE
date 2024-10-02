import React from 'react'

import styles from './FormInputGroup.module.scss'

type Props = {
	label: string
	children: React.ReactNode
}

const FormInputGroup = ({ label, children }: Props) => {
	return (
		<div className={styles.formInputGroup}>
			<label className={styles.labelContainer}>
				<span className={styles.labelText}>{label}</span>
				<div className={styles.inputWrapper}>{children}</div>
			</label>
		</div>
	)
}

export default FormInputGroup
