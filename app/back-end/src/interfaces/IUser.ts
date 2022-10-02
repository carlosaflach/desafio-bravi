import { z } from 'zod';

const UserZodSchema = z.object({
  name: z.string().min(3),
  age: z.number().int().gte(0).lte(100),
  email: z.string().email(),
  phoneNumber: z.number(),
  celNumber: z.number().min(11),
  address: z.string().min(4),
  password: z.string().min(7),
});

type IUser = z.infer<typeof UserZodSchema>

export { IUser, UserZodSchema};