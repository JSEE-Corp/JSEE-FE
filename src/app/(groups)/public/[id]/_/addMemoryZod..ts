import { z } from 'zod'

export const addMemorySchema = z.object({
	nickname: z.string().min(1),
	title: z.string().min(1),
	image: z.string().min(1),
	content: z.string().min(1),
	tag: z.string().min(1),
	place: z.string().min(1),
	date: z.string().min(1),
	isPublic: z.boolean(),
	password: z.string().min(1),
})

export type AddMemorySchema = z.infer<typeof addMemorySchema>
