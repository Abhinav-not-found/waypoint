import { z } from 'zod';

class OrganisationValidator {
  createOrganisationSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, 'Organisation name must be at least 2 characters')
      .max(100, 'Organisation name cannot exceed 100 characters'),

    description: z.string().trim().max(500, 'Description cannot exceed 500 characters').optional(),

    logo: z.url('Invalid logo URL').optional(),
  });

  organisationIdSchema = z.object({
    organisationId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid organisation ID'),
  });
  
  updateOrganisationSchema = this.createOrganisationSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, 'At least one field must be provided');
}

export default OrganisationValidator;
