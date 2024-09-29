import React from 'react'

import { clc } from '@/utils/classComposer'

import FillImg from './base/FillImg'
import Icon from './base/Icon'

import styles from './card.module.scss'

interface CardForMemoryProps {
	isPublic?: boolean
	isPrivate?: boolean
}

const CardForMemory = ({ isPrivate = false, isPublic = false }: CardForMemoryProps) => {
	return (
		<div className={clc(styles.space, isPrivate && styles.private)}>
			<div className={styles.card}>
				{isPublic && (
					<div className={styles.imgArea}>
						<FillImg src={'/img/img1.png'} alt='img1' className={styles.img} />
					</div>
				)}
				<div className={styles.textArea}>
					<div className={styles.topInfo}>
						<div className={styles.author}>authosdfsfdr</div> |
						<div className={styles.isPublic}>{isPublic ? '공개' : '비공개'} </div>
					</div>

					<div className={styles.middleInfo}>
						<div className={styles.title}>
							tisdfsdfsdfsdfskjdfjksjdkjfhkdjfhkdjhfksjdhftletititltitititiitititititile
						</div>
						{isPublic && (
							<div className={styles.tags}>
								tag tat gat aga gat aa gga ta tfa gat afga gata gga siidfjlskdjflskdjlfj'eiwfjosdij
								sdfsdfsdfdsf;ofksdfsfk;ewfjkwd
							</div>
						)}
					</div>
					<div className={styles.bottomInfo}>
						{isPublic && (
							<div className={styles.infoWrap1}>
								<div className={styles.place}>인천 앞바다</div>· <div className={styles.date}>00.00.00</div>
							</div>
						)}
						<div className={styles.infoWrap2}>
							<div className={styles.likes}>
								<Icon path='flower' className={styles.icon20} alt='flower' />
								120
							</div>
							<div className={styles.comments}>
								<Icon path='bubble' className={styles.icon24} alt='bubble' />8
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardForMemory
