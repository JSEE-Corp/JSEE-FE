import React from 'react'

import Button from '@/component/base/Button'

const page = () => {
	return (
		<form>
			<div>그룹 만들기</div>

			<label>
				그룹명
				<input type='text' />
			</label>

			<label>
				대표 이미지
				<input type='file' />
			</label>

			<label>
				그룹 소개
				<textarea />
			</label>

			<label>
				그룹 공개 선택
				<select>
					<option value='public'>공개</option>
					<option value='private'>비공개</option>
				</select>
			</label>

			<label>
				비밀번호 생성
				<input type='password' />
			</label>

			<Button dark type='submit'>
				만들기
			</Button>
		</form>
	)
}

export default page
