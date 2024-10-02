'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import Tab from './base/Tab'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'

import styles from './filterBar.module.scss'

interface FilterBarProps {
	initialSelected: 'public' | 'private'
}
const FilterBar = ({ initialSelected = 'public' }: FilterBarProps) => {
	const [selected, setSelected] = useState<'public' | 'private'>(initialSelected)

	const handleClick = (tab: 'public' | 'private') => {
		setSelected(tab)
	}

	const handleSearch = (value: string) => {
		console.log(value)
	}

	return (
		<div className={styles.filterBar}>
			<div className={styles.tabs}>
				<Link href='/'>
					<Tab isPublic selected={selected === 'public'} onClick={() => handleClick('public')} />
				</Link>
				<Link href='/private'>
					<Tab isPrivate selected={selected === 'private'} onClick={() => handleClick('private')} />
				</Link>
			</div>
			<div className={styles.searchBar}>
				<SearchBar onSearch={handleSearch} />
			</div>
			<div className={styles.dropdown}>
				<Dropdown />
			</div>
		</div>
	)
}

export default FilterBar
