import z from 'zod';

class TeamValidator {
  createTeamSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, 'Team name must be at least 2 characters')
      .max(100, 'Team name cannot exceed 100 characters'),

    description: z.string().trim().max(500, 'Description cannot exceed 500 characters').optional(),
    organisationId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid organisation ID'),
  });

  teamIdSchema = z.object({
    teamId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid team ID'),
  });

  updateTeamSchema = this.createTeamSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, 'At least one field must be provided');
}
export default TeamValidator;
