'use client'

import React, { useState } from 'react'

import Card from '@/component/Card'
import CreateButton from '@/component/CreateButton'
import FilterBar from '@/component/FilterBar'
import Modal from '@/component/modal/Modal'
import { ModalWrapper } from '@/component/modal/ModalWrapper'
import More from '@/component/More'
import TitleText from '@/component/TitleText'

import styles from './MemoryList.module.scss'

const MemoryList = () => {
	const [modalState, setModalState] = useState({ uploadMemoryOpen: false })

	const toggleModal = (modalName: 'uploadMemoryOpen', isOpen: boolean) => {
		setModalState((prevState) => ({ ...prevState, [modalName]: isOpen }))
	}

	return (
		<>
			<article className={styles.memoryList}>
				<div className={styles.memoryHeader}>
					<div className={styles.title}>
						<TitleText title='추억 목록' />
					</div>

					<CreateButton text='추억 올리기' onClick={() => toggleModal('uploadMemoryOpen', true)} />

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

			{modalState.uploadMemoryOpen && (
				<Modal modalId='uploadMemoryOpen' onClose={() => toggleModal('uploadMemoryOpen', false)}>
					<ModalWrapper>
						<h2>uploadMemoryOpen</h2>
						<button onClick={() => toggleModal('uploadMemoryOpen', false)}>닫기</button>
					</ModalWrapper>
				</Modal>
			)}
		</>
	)
}

export default MemoryList
