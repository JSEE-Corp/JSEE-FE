import React from 'react'
import Link from 'next/link'

import { clc } from '@/utils/classComposer'

import Button from './base/Button'

import styles from './createButton.module.scss'

interface CreateButtonProps {
	link?: string
	text?: string
	className?: string
	children?: React.ReactNode
	onClick?: () => void
}

const CreateButton = ({ link, text, className, children, onClick, ...props }: CreateButtonProps) => {
	return (
		<div className={clc(styles.createButton, className)}>
			{link ? (
				<Link href={link}>
					<Button className={styles.create} dark>
						{text}
					</Button>
				</Link>
			) : (
				<Button className={styles.create} dark onClick={onClick}>
					{text}
				</Button>
			)}
		</div>
	)
}

export default CreateButton
