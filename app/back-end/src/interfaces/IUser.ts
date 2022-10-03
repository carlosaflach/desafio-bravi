import { z } from 'zod';

const UserZodSchema = z.object({
  name: z.string().min(4),
  age: z.number().int().gte(0).lte(100),
  email: z.string().email(),
  phoneNumber: z.string(),
  celNumber: z.string(),
  address: z.string().min(5),
},);

type IUser = z.infer<typeof UserZodSchema>

export { IUser, UserZodSchema};