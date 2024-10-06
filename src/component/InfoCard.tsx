'use client'

import React, { useState } from 'react'

import { clc } from '@/utils/classComposer'

import Button from './base/Button'
import FillImg from './base/FillImg'
import Icon from './base/Icon'
import Modal from './modal/Modal'
import { ModalWrapper } from './modal/ModalWrapper'
import Badge from './Badge'

import styles from './infoCard.module.scss'

interface BaseInfoCardProps {
	isPublic: boolean
	dday: string
	title: string
}

interface GroupInfoCardProps extends BaseInfoCardProps {
	isGroup: true
	desc: string
	memories: number
	groupLikes: number
	badges: string[]
}

interface MemoryInfoCardProps extends BaseInfoCardProps {
	isGroup: false
	tags: string[]
	place: string
	date: string
	likes: number
	comments: number
}

type InfoCardProps = GroupInfoCardProps | MemoryInfoCardProps

const InfoCard: React.FC<InfoCardProps> = (props) => {
	const { isGroup, isPublic, dday, title } = props

	const [groupModalState, setGroupModalState] = useState({
		editGroup: false,
		deleteGroup: false,
	})

	const [memoryModalState, setMemoryModalState] = useState({
		editMemory: false,
		deleteMemory: false,
	})

	const toggleGroupModal = (modalName: keyof typeof groupModalState, isOpen: boolean) => {
		setGroupModalState((prevState) => ({ ...prevState, [modalName]: isOpen }))
	}

	const toggleMemoryModal = (modalName: keyof typeof memoryModalState, isOpen: boolean) => {
		setMemoryModalState((prevState) => ({ ...prevState, [modalName]: isOpen }))
	}

	return (
		<div className={styles.infoCard}>
			{isGroup && (
				<div className={styles.imgArea}>
					<FillImg src='/img/img2.png' alt='img2' className={styles.img} />
				</div>
			)}
			<div className={clc(styles.textArea, isGroup ? styles.forGroup : styles.forMemory)}>
				<div className={styles.topInfo}>
					<div className={styles.leftWrapper}>
						<div className={styles.dday}>{dday}</div> |
						<div className={styles.isPublic}>{isPublic ? '공개' : '비공개'}</div>
					</div>
					<div className={styles.rightWrapper}>
						<button
							className={styles.edit}
							onClick={() => (isGroup ? toggleGroupModal('editGroup', true) : toggleMemoryModal('editMemory', true))}>
							{isGroup ? '그룹 정보 수정하기' : '추억 수정하기'}
						</button>
						<button
							className={styles.delete}
							onClick={() =>
								isGroup ? toggleGroupModal('deleteGroup', true) : toggleMemoryModal('deleteMemory', true)
							}>
							{isGroup ? '그룹 삭제하기' : '추억 삭제하기'}
						</button>
					</div>
				</div>
				<div className={styles.middleInfo}>
					<div className={styles.titleWrapper}>
						<div className={styles.title}>{title}</div>
						{isGroup && (
							<div className={styles.subInfo}>
								<div className={styles.memories}>추억 {props.memories}</div>|
								<div className={styles.groupLikes}>그룹 공감 {props.groupLikes}</div>
							</div>
						)}
					</div>
					{isGroup ? (
						<div className={styles.desc}>{props.desc}</div>
					) : (
						<div className={styles.tags}>
							{props.tags.map((tag, index) => (
								<div key={index} className={styles.tag}>
									{tag}
								</div>
							))}
						</div>
					)}
				</div>
				<div className={clc(styles.bottomInfo, isGroup ? styles.forGroup : styles.forMemory)}>
					{isGroup ? (
						<>
							<span className={styles.badgeTitle}>획득 배지</span>
							<div className={styles.badgesWrapper}>
								<div className={styles.badges}>
									{props.badges.map((badge, index) => (
										<Badge key={index} content={badge} />
									))}
								</div>
								<Button light className={styles.sendLike}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									공감 보내기
								</Button>
							</div>
						</>
					) : (
						<>
							<div className={styles.infoWrap1}>
								<div className={styles.place}>{props.place}</div>·<div className={styles.date}>{props.date}</div>
							</div>
							<div className={styles.infoWrap2}>
								<div className={styles.likes}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									<span>{props.likes}</span>
								</div>
								<div className={styles.comment}>
									<Icon path='bubble' className={styles.icon24} alt='bubble' />
									<span>{props.comments}</span>
								</div>
							</div>
							<Button light className={styles.sendLike}>
								<Icon path='flower' className={styles.icon20} alt='flower' />
								공감 보내기
							</Button>
						</>
					)}
				</div>
			</div>
			{groupModalState.editGroup && (
				<Modal modalId='editGroup' onClose={() => toggleGroupModal('editGroup', false)}>
					<ModalWrapper>
						<div className={styles.editGroupForm}>
							<h2>그룹 정보 수정</h2>
							<Button onClick={() => toggleGroupModal('editGroup', false)}>닫기</Button>
						</div>
					</ModalWrapper>
				</Modal>
			)}

			{groupModalState.deleteGroup && (
				<Modal modalId='deleteGroup' onClose={() => toggleGroupModal('deleteGroup', false)}>
					<ModalWrapper>
						<div className={styles.deleteGroup}>
							<h2>그룹 삭제</h2>
							<p>정말로 그룹을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
							<Button onClick={() => {}}>삭제</Button>
							<Button onClick={() => toggleGroupModal('deleteGroup', false)}>취소</Button>
						</div>
					</ModalWrapper>
				</Modal>
			)}

			{memoryModalState.editMemory && (
				<Modal modalId='editMemory' onClose={() => toggleMemoryModal('editMemory', false)}>
					<ModalWrapper>
						<div className={styles.editMemoryForm}>
							<h2>추억 수정</h2>
							<Button onClick={() => toggleMemoryModal('editMemory', false)}>닫기</Button>
						</div>
					</ModalWrapper>
				</Modal>
			)}

			{memoryModalState.deleteMemory && (
				<Modal modalId='deleteMemory' onClose={() => toggleMemoryModal('deleteMemory', false)}>
					<ModalWrapper>
						<div className={styles.deleteMemory}>
							<h2>추억 삭제</h2>
							<p>정말로 이 추억을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
							<Button onClick={() => {}}>삭제</Button>
							<Button onClick={() => toggleMemoryModal('deleteMemory', false)}>취소</Button>
						</div>
					</ModalWrapper>
				</Modal>
			)}
		</div>
	)
}

export default InfoCard
