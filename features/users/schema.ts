import { z } from "zod"

// TODO:  Update user schema, add something else to id user in case names overlap.
export const userSchema = z.object({
  name: z.string(),
  phone: z.string(),
  activity: z.string(),
  lastMessage: z.string(),
  intake: z.string(),
})

export type User = z.infer<typeof userSchema>