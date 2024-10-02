import React from 'react'
import Link from 'next/link'

import { clc } from '@/utils/classComposer'

import FillImg from './base/FillImg'
import Icon from './base/Icon'

import styles from './card.module.scss'

// 기본 속성
interface BaseCardProps {
	title: string
	isPublic?: boolean
	isPrivate?: boolean
	forGroup?: boolean
	forMemory?: boolean
}

// 공개 카드 속성
interface PublicCardProps {
	place?: string
	date?: string
}

// 그룹 카드 속성
interface GroupCardProps {
	dday?: string
	desc?: string
	badges?: number
	memories?: number
	groupLikes?: number
}

// 메모리 카드 속성
interface MemoryCardProps {
	author?: string
	tags?: string
	likes?: number
	comments?: number
}

type CardProps = BaseCardProps & PublicCardProps & GroupCardProps & MemoryCardProps

const Card = ({ isPublic, isPrivate, forGroup, forMemory, title, ...props }: CardProps) => {
	return (
		<Link
			href={`/public/1`}
			className={clc(
				styles.space,
				isPrivate && forGroup ? styles.privateGroup : isPrivate && forMemory ? styles.privateMemory : ''
			)}>
			<div className={styles.card}>
				{isPublic && (
					<div className={styles.imgArea}>
						<FillImg src={'/img/img1.png'} alt='img1' className={styles.img} />
					</div>
				)}
				<div className={styles.textArea}>
					<div className={styles.topInfo}>
						{forGroup ? (
							<>
								<div className={styles.dday}>{props.dday}</div> |
							</>
						) : (
							<>
								<div className={styles.author}>{props.author}</div> |
							</>
						)}
						<div className={styles.isPublic}>{isPublic ? '공개' : '비공개'} </div>
					</div>

					<div className={styles.middleInfo}>
						<div className={styles.title}>{title}</div>
						{isPublic &&
							(forGroup ? (
								<div className={styles.desc}>{props.desc}</div>
							) : (
								<div className={styles.tags}>{props.tags}</div>
							))}
					</div>

					{forGroup ? (
						<div className={styles.bottomInfoForGroup}>
							{isPublic && (
								<div className={styles.badge}>
									<span>획득 배지</span>
									<span>{props.badges}</span>
								</div>
							)}
							<div className={styles.memory}>
								<span>추억</span>
								<span>{props.memories}</span>
							</div>
							<div className={styles.groupLikes}>
								<span>그룹 공감</span>
								<div className={styles.iconWrap}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									<span>{props.groupLikes}</span>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.bottomInfo}>
							{isPublic && (
								<div className={styles.infoWrap1}>
									<div className={styles.place}>{props.place}</div>· <div className={styles.date}>{props.date}</div>
								</div>
							)}
							<div className={styles.infoWrap2}>
								<div className={styles.likes}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									{props.likes}
								</div>
								<div className={styles.comments}>
									<Icon path='bubble' className={styles.icon24} alt='bubble' />
									{props.comments}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}

export default Card
