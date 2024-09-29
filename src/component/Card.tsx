import React from 'react'

import { clc } from '@/utils/classComposer'

import FillImg from './base/FillImg'
import Icon from './base/Icon'

import styles from './card.module.scss'

interface CardProps {
	isPublic?: boolean
	isPrivate?: boolean
	forGroup?: boolean
	forMemory?: boolean
	author?: string
	dday?: string
	title: string
	desc?: string
	tags?: string
	place?: string
	date?: string
	likes?: number
	comments?: number
	badges?: number
	memories?: number
	groupLikes?: number
}

const Card = ({
	isPublic = false,
	isPrivate = false,
	forGroup = false,
	forMemory = false,
	author,
	dday,
	title,
	desc,
	tags,
	place,
	date,
	likes,
	comments,
	badges,
	memories,
	groupLikes,
}: CardProps) => {
	return (
		<div
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
								<div className={styles.dday}>{dday}</div> |
							</>
						) : (
							<>
								<div className={styles.author}>{author}</div> |
							</>
						)}
						<div className={styles.isPublic}>{isPublic ? '공개' : '비공개'} </div>
					</div>

					<div className={styles.middleInfo}>
						<div className={styles.title}>{title}</div>
						{isPublic &&
							(forGroup ? <div className={styles.desc}>{desc}</div> : <div className={styles.tags}>{tags}</div>)}
					</div>

					{forGroup ? (
						<div className={styles.bottomInfoForGroup}>
							{isPublic && (
								<div className={styles.badge}>
									<span>획득 배지</span>
									<span>{badges}</span>
								</div>
							)}
							<div className={styles.memory}>
								<span>추억</span>
								<span>{memories}</span>
							</div>
							<div className={styles.groupLikes}>
								<span>그룹 공감</span>
								<div className={styles.iconWrap}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									<span>{groupLikes}</span>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.bottomInfo}>
							{isPublic && (
								<div className={styles.infoWrap1}>
									<div className={styles.place}>{place}</div>· <div className={styles.date}>{date}</div>
								</div>
							)}
							<div className={styles.infoWrap2}>
								<div className={styles.likes}>
									<Icon path='flower' className={styles.icon20} alt='flower' />
									{likes}
								</div>
								<div className={styles.comments}>
									<Icon path='bubble' className={styles.icon24} alt='bubble' />
									{comments}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
