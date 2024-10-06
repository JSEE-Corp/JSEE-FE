import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/component/base/Button'
import Icon from '@/component/base/Icon'
import FormInputGroup from '@/component/form/FormInputGroup'
import TitleText from '@/component/TitleText'

import { AddMemorySchema, addMemorySchema } from './addMemoryZod.'

import styles from './addMemoryForm.module.scss'

interface AddMemoryFormProps {
	onClose: () => void
}

const AddMemoryForm = ({ onClose }: AddMemoryFormProps) => {
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { isValid, errors },
		reset,
	} = useForm<AddMemorySchema>({
		resolver: zodResolver(addMemorySchema),
		mode: 'onChange',
	})

	const onSubmit = (data: AddMemorySchema) => {
		console.log(data)
	}

	return (
		<form className={styles.addMemoryForm} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.header}>
				<TitleText title='추억 올리기' />
				<button onClick={onClose} className={styles.closeButton}>
					<Icon path='x' alt='닫기' className={styles.icon24} />
				</button>
			</div>

			<div className={styles.memoryForm}>
				<div className={styles.leftWrapper}>
					<FormInputGroup label='닉네임'>
						<Controller
							name='nickname'
							control={control}
							render={({ field }) => (
								<input {...field} type='text' placeholder='닉네임을 입력해 주세요' className={styles.inputField} />
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='제목'>
						<Controller
							name='title'
							control={control}
							render={({ field }) => (
								<input {...field} type='text' placeholder='제목을 입력해 주세요' className={styles.inputField} />
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='이미지'>
						<Controller
							name='image'
							control={control}
							render={({ field }) => <input type='file' accept='image/*' className={styles.inputField} />}
						/>
					</FormInputGroup>
					<FormInputGroup label='본문'>
						<Controller
							name='content'
							control={control}
							render={({ field }) => (
								<textarea {...field} className={styles.textareaField} placeholder='본문을 입력해 주세요' />
							)}
						/>
					</FormInputGroup>
				</div>
				<div className={styles.vericalLine} />
				<div className={styles.rightWrapper}>
					<FormInputGroup label='태그'>
						<Controller
							name='tag'
							control={control}
							render={({ field }) => (
								<input {...field} type='text' className={styles.inputField} placeholder='태그를 입력해 주세요' />
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='장소'>
						<Controller
							name='place'
							control={control}
							render={({ field }) => (
								<input {...field} className={styles.inputField} placeholder='장소를 입력해 주세요' />
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='추억의 순간'>
						<Controller
							name='date'
							control={control}
							render={({ field }) => (
								<input {...field} type='date' className={styles.inputField} placeholder='YYYY-MM-DD' />
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='추억 공개 선택'>
						<Controller
							name='isPublic'
							control={control}
							render={({ field }) => (
								<select {...field} className={styles.selectField} value={field.value ? 'public' : 'private'}>
									<option value='public'>공개</option>
									<option value='private'>비공개</option>
								</select>
							)}
						/>
					</FormInputGroup>
					<FormInputGroup label='비밀번호 생성'>
						<Controller
							name='password'
							control={control}
							render={({ field }) => <input type='password' {...field} className={styles.inputField} />}
						/>
					</FormInputGroup>
				</div>
			</div>

			<Button dark type='submit' disabled={!isValid} className={styles.submitButton}>
				올리기
			</Button>
		</form>
	)
}

export default AddMemoryForm
