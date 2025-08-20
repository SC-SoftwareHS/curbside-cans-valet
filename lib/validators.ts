import { z } from 'zod'

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(/^[\d\s()+-]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  address: z
    .string()
    .min(10, 'Please enter your full address')
    .max(500, 'Address must be less than 500 characters'),
  notes: z
    .string()
    .max(1000, 'Notes must be less than 1000 characters')
    .optional()
    .or(z.literal(''))
})

export type LeadFormData = z.infer<typeof leadFormSchema>