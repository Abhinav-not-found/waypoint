import InvitationController from '@/module/invitation/invitation.controller.js';
import InvitationValidator from '@/module/invitation/invitation.validator.js';
import validate from '@/shared/middlewares/validate.middleware.js';
import { Router } from 'express';

const invitationRouter = Router();
const invitationController = new InvitationController();
const invitationValidator = new InvitationValidator();

invitationRouter.post('/organisations/:organisationId/send', invitationController.sendInvite);

/**
 * @openapi
 * /invitation/organisations/{organisationId}/all:
 *   get:
 *     tags:
 *       - Invitations
 *     summary: Fetch all organisation invitations
 *     description: Retrieves all invitations belonging to the specified organisation.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: organisationId
 *         required: true
 *         description: MongoDB ID of the organisation.
 *         schema:
 *           type: string
 *           example: 673a1b2c3d4e5f6789012345
 *     responses:
 *       200:
 *         description: Invitations fetched successfully
 *       400:
 *         description: Invalid organisation ID
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Insufficient permissions to view invitations
 *       404:
 *         description: Organisation not found
 */
invitationRouter.get(
  '/organisations/:organisationId/all',
  validate({
    params: invitationValidator.organisationIdSchema,
  }),
  invitationController.fetchAllInvitations,
);

export default invitationRouter;
