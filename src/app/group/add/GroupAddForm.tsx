'use client'

import React from 'react'
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/component/base/Button'
import FormInputGroup from '@/component/form/FormInputGroup'

import { GroupAddSchema, groupAddSchema } from './groupAddZod'

import styles from './groupAddForm.module.scss'

const GroupAddForm = () => {
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { isValid, errors },
		reset,
	} = useForm<GroupAddSchema>({
		resolver: zodResolver(groupAddSchema),
		shouldUnregister: true,
		mode: 'onChange',
	})

	const onSubmit = (data: GroupAddSchema) => {
		console.log(data)
	}

	return (
		<form className={styles.groupAddForm} onSubmit={handleSubmit(onSubmit)}>
			<h1 className={styles.title}>그룹 만들기</h1>
			<FormInputGroup label='그룹명'>
				<Controller
					name='name'
					control={control}
					render={({ field }) => (
						<input {...field} type='text' placeholder='공지 제목을 입력해 주세요' className={styles.inputField} />
					)}
				/>
			</FormInputGroup>
			<FormInputGroup label='대표 이미지'>
				<Controller
					name='image'
					control={control}
					render={({ field }) => <input type='file' accept='image/*' className={styles.inputField} />}
				/>
			</FormInputGroup>
			<FormInputGroup label='그룹 소개'>
				<Controller
					name='description'
					control={control}
					render={({ field }) => (
						<textarea {...field} className={styles.textareaField} placeholder='그룹 소개를 입력해 주세요' />
					)}
				/>
			</FormInputGroup>
			<FormInputGroup label='그룹 공개 선택'>
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
			<Button dark type='submit' disabled={!isValid} className={styles.submitButton}>
				만들기
			</Button>
		</form>
	)
}

export default GroupAddForm
