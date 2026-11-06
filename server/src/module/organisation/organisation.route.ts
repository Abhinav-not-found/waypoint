import OrganisationController from '@/module/organisation/organisation.controller.js';
import OrganisationValidator from '@/module/organisation/organisation.validator.js';
import { requireAuth } from '@/shared/middlewares/auth.middleware.js';
import validate from '@/shared/middlewares/validate.middleware.js';
import { Router } from 'express';

const organisationRouter = Router();
const organisationController = new OrganisationController();
const organisationValidator = new OrganisationValidator();

/**
 * @openapi
 * /organisations:
 *   post:
 *     tags:
 *       - Organisations
 *     summary: Create an organisation
 *     description: Creates a new organisation for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrganisationRequest'
 *     responses:
 *       201:
 *         description: Organisation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganisationResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 *       401:
 *         description: Authentication required
 *       409:
 *         description: Organisation conflict
 */
organisationRouter.post(
  '/',
  requireAuth,
  validate({
    body: organisationValidator.createOrganisationSchema,
  }),
  organisationController.createOrganisation,
);

/**
 * @openapi
 * /organisations/all:
 *   get:
 *     tags:
 *       - Organisations
 *     summary: Fetch all organisations
 *     description: Retrieves all non-deleted organisations. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Organisations fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganisationsResponse'
 *       401:
 *         description: Authentication required
 */
organisationRouter.get('/all', requireAuth, organisationController.getAllOrganisations);

/**
 * @openapi
 * /organisations/my:
 *   get:
 *     tags:
 *       - Organisations
 *     summary: Fetch user's organisations
 *     description: Retrieves non-deleted organisations associated with the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User organisations fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganisationsResponse'
 *       401:
 *         description: Authentication required
 */
organisationRouter.get('/my', requireAuth, organisationController.getUserOrganisations);

/**
 * @openapi
 * /organisations/{organisationId}:
 *   patch:
 *     tags:
 *       - Organisations
 *     summary: Update an organisation
 *     description: Updates the provided fields of an existing organisation.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: organisationId
 *         required: true
 *         description: MongoDB ID of the organisation
 *         schema:
 *           type: string
 *           pattern: '^[a-fA-F0-9]{24}$'
 *         example: '6a8f0bbc7b147839f36243f4'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOrganisationRequest'
 *     responses:
 *       200:
 *         description: Organisation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganisationResponse'
 *       400:
 *         description: Invalid organisation ID or request body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Organisation not found
 */
organisationRouter.patch(
  '/:organisationId',
  requireAuth,
  validate({
    params: organisationValidator.organisationIdSchema,
    body: organisationValidator.updateOrganisationSchema,
  }),
  organisationController.updateOneOrganisation,
);

/**
 * @openapi
 * /organisations/{organisationId}:
 *   delete:
 *     tags:
 *       - Organisations
 *     summary: Delete an organisation
 *     description: Soft-deletes an existing organisation.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: organisationId
 *         required: true
 *         description: MongoDB ID of the organisation
 *         schema:
 *           type: string
 *           pattern: '^[a-fA-F0-9]{24}$'
 *         example: '6a8f0bbc7b147839f36243f4'
 *     responses:
 *       200:
 *         description: Organisation deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganisationResponse'
 *       400:
 *         description: Invalid organisation ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Organisation not found
 */
organisationRouter.delete(
  '/:organisationId',
  requireAuth,
  validate({
    params: organisationValidator.organisationIdSchema,
  }),
  organisationController.deleteOneOrganisation,
);

export default organisationRouter;
