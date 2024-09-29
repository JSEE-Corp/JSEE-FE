'use client'

import React, { useEffect, useRef, useState } from 'react'

import Icon from './base/Icon'

import styles from './dropdown.module.scss'

const options = [
	{ value: 'latest', label: '최신순' },
	{ value: 'popular', label: '공감순' },
	{ value: 'comments', label: '댓글순' },
]

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedOption, setSelectedOption] = useState(options[0])

	const selectRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleClickOutside = (event: MouseEvent) => {
		if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	const handleOptionClick = (option: (typeof options)[number]) => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className={styles.dropdown} ref={selectRef}>
			<div className={styles.selectedValue} onClick={toggleDropdown}>
				{selectedOption.label}
			</div>
			<Icon path='arrowDown' alt='arrowDown' className={styles.icon} />

			{isOpen && (
				<div className={styles.dropdownOpen}>
					<div className={styles.optionsList}>
						{options.map((option) => (
							<div
								key={option.value}
								className={`${styles.option} ${selectedOption.value === option.value ? styles.selected : ''}`}
								onClick={() => handleOptionClick(option)}>
								{option.label}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown
