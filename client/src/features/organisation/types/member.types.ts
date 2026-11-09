import z from "zod";

export type Role = 'admin' | 'manager' | 'employee';

export const inviteMemberSchema = z.object({
  email: z.email('Please enter a valid email address'),
  role: z.enum(['manager', 'employee']),
});

export type InviteMemberFormValues = z.infer<typeof inviteMemberSchema>;
