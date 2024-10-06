import React, { HTMLAttributes } from 'react'

import styles from './modalWrapper.module.scss'

interface Props<T> extends HTMLAttributes<T> {
	children: React.ReactNode
}

export const ModalWrapper = ({ children }: Props<HTMLSpanElement>) => {
	return <div className={styles.modalWrapper}>{children}</div>
}
