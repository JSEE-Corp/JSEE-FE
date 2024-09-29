import React, { CSSProperties, HTMLAttributes } from 'react'

import { clc } from '../../utils/classComposer'

import styles from './icon.module.scss'

const defaultAssetList = ['search', 'bubble', 'x', 'edit', 'delete', 'empty', 'calender', 'arrowDown'] as const
const coloredAssetList = ['flower'] as const

type DefaultAssetName = (typeof defaultAssetList)[number]
type ColoredAssetName = (typeof coloredAssetList)[number]

type IconName = DefaultAssetName | ColoredAssetName

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
	path: IconName
	alt: string
	className?: string
	style?: CSSProperties
}

const defaultAssetUrl = '/svg/defaultAsset.svg#'
const coloredAssetUrl = '/svg/coloredAsset.svg#'

const pathToSrc = (path: IconName) => {
	if ((coloredAssetList as readonly string[]).includes(path)) {
		return coloredAssetUrl + path
	}
	return defaultAssetUrl + path
}

const Icon = ({ path, alt, className, style, ...props }: IconProps) => {
	const src = pathToSrc(path)

	return (
		<svg {...props} style={{ ...style }} className={clc(styles.icon, className)} aria-label={alt}>
			<use href={src} xlinkHref={src} />
		</svg>
	)
}

export default Icon
