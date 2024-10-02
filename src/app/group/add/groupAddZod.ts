import { z } from 'zod'

export const groupAddSchema = z.object({
	name: z.string().min(1),
	image: z.string().min(1),
	description: z.string().min(1),
	isPublic: z.boolean(),
	password: z.string().min(1),
})

export type GroupAddSchema = z.infer<typeof groupAddSchema>
