'use client'

import React, { useRef, useState } from 'react'

import Icon from './base/Icon'

import styles from './searchBar.module.scss'

type SearchBarProps = {
	recentSearches?: string[]
	onSearch: (value: string) => void
	placeholder?: string
}

const SearchBar = ({ recentSearches, onSearch, placeholder }: SearchBarProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const searchRef = useRef<HTMLDivElement>(null)

	const handleSearchClick = (search: string) => {
		setInputValue(search)
		onSearch(search)
		setIsOpen(false)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	return (
		<div className={styles.searchBar} ref={searchRef}>
			<div className={styles.searchContainer}>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					placeholder={placeholder}
					className={styles.searchInput}
					onFocus={() => setIsOpen(true)}
				/>
				<Icon path='search' className={styles.icon} alt='search' />
			</div>
			{isOpen && (recentSearches?.length ?? 0) > 0 && (
				<div className={styles.dropdown}>
					{(recentSearches ?? []).map((search, index) => (
						<div key={index} className={styles.recentSearchItem} onClick={() => handleSearchClick(search)}>
							{search}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchBar
