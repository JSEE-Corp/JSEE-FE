'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { clc } from '@/utils/classComposer'

import styles from './modal.module.scss'

interface ModalProps {
	modalId: string
	children: React.ReactNode
	onClose: () => void
	fullPage?: boolean
}

const MODAL_PREFIX = 'modal_'

const Modal = ({ modalId, children, onClose, fullPage }: ModalProps) => {
	useEffect(() => {
		document.body.classList.add(styles.fix)
		return () => document.body.classList.remove(styles.fix)
	}, [])

	const ModalContent = () => (
		<div
			id={`${MODAL_PREFIX}${modalId}`}
			className={clc(styles.modal, fullPage ? styles.fullModal : styles.partModal)}
			onClick={(e) => {
				if (e.currentTarget === e.target) {
					onClose()
				}
			}}>
			{children}
		</div>
	)

	return createPortal(<ModalContent />, document.body)
}

export default Modal
