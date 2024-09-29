'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Button from './base/Button'
import Tab from './base/Tab'

import styles from './GNB.module.scss'

const GNB = () => {
	return (
		<nav className={styles.gnb}>
			<div className={styles.title}>조각집</div>
			<Button className={styles.create}>만들기</Button>
		</nav>
	)
}

export default GNB
