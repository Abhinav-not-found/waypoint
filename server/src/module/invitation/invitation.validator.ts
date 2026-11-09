import { z } from 'zod';

class InvitationValidator {
  organisationIdSchema = z.object({
    organisationId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid organisation ID'),
  });
}

export default InvitationValidator;
