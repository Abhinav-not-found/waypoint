import { z } from 'zod';

export const createOrganisationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),

  description: z
    .string()
    .trim()
    .max(500, 'Description cannot exceed 500 characters'),

  logo: z.union([
    z.url('Enter a valid logo URL'),
    z.literal(''),
  ]),
});

export type CreateOrganisationValues = z.infer<
  typeof createOrganisationSchema
>;