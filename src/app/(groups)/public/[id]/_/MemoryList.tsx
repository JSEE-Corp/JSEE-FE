'use client'

import React, { useState } from 'react'

import Icon from '@/component/base/Icon'
import Card from '@/component/Card'
import CreateButton from '@/component/CreateButton'
import FilterBar from '@/component/FilterBar'
import Modal from '@/component/modal/Modal'
import { ModalWrapper } from '@/component/modal/ModalWrapper'
import More from '@/component/More'
import TitleText from '@/component/TitleText'

import AddMemoryForm from './AddMemoryForm'

import styles from './MemoryList.module.scss'

const MemoryList = () => {
	const [modalState, setModalState] = useState({ uploadMemory: false })

	const toggleModal = (modalName: 'uploadMemory', isOpen: boolean) => {
		setModalState((prevState) => ({ ...prevState, [modalName]: isOpen }))
	}

	return (
		<>
			<article className={styles.memoryList}>
				<div className={styles.memoryHeader}>
					<div className={styles.title}>
						<TitleText title='추억 목록' />
					</div>

					<CreateButton text='추억 올리기' onClick={() => toggleModal('uploadMemory', true)} />

					<FilterBar initialSelected='public' forContents />
				</div>

				<div className={styles.memoryContents}>
					<div className={styles.cards}>
						{[...Array(12)].map((_, index) => (
							<Card
								key={index}
								isPublic
								forMemory
								author='김코딩'
								title='첫 번째 해커톤 참가'
								tags={['해커톤', '개발', '팀워크']}
								place='서울 스타트업 허브'
								date='2024.03.15'
								likes={42}
								comments={7}
							/>
						))}
					</div>

					<More />
				</div>
			</article>

			{modalState.uploadMemory && (
				<Modal modalId='uploadMemory' onClose={() => toggleModal('uploadMemory', false)}>
					<ModalWrapper>
						<AddMemoryForm onClose={() => toggleModal('uploadMemory', false)} />
					</ModalWrapper>
				</Modal>
			)}
		</>
	)
}

export default MemoryList
