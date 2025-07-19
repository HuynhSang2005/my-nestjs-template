
import { createZodDto } from 'nestjs-zod';
import z from 'zod';


const CreateUserSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  email: z.email({ message: 'Invalid email format' }),
});


export class CreateUserDto extends createZodDto(CreateUserSchema) {}