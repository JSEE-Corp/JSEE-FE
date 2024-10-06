import React from 'react'

import styles from './titleText.module.scss'

interface TitleTextProps {
	title: string
}

const TitleText = ({ title }: TitleTextProps) => {
	return <div className={styles.titleText}>{title}</div>
}

export default TitleText
