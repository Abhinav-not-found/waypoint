import OrganisationController from '@/module/organisation/organisation.controller.js';
import OrganisationValidator from '@/module/organisation/organisation.validator.js';
import { requireAuth } from '@/shared/middlewares/auth.middleware.js';
import validate from '@/shared/middlewares/validate.middleware.js';
import { Router } from 'express';

const organisationRouter = Router();
const organisationController = new OrganisationController();
const organisationValidator = new OrganisationValidator();

organisationRouter.post(
  '/',
  requireAuth,
  validate({
    body: organisationValidator.createOrganisationSchema,
  }),
  organisationController.createOrganisation,
);

organisationRouter.get('/all', requireAuth, organisationController.getAllOrganisations);

organisationRouter.get('/my', requireAuth, organisationController.getUserOrganisations);

organisationRouter.patch(
  '/:organisationId',
  requireAuth,
  validate({
    params: organisationValidator.organisationIdSchema,
    body: organisationValidator.updateOrganisationSchema,
  }),
  organisationController.updateOneOrganisation,
);

organisationRouter.delete(
  '/:organisationId',
  requireAuth,
  validate({
    params: organisationValidator.organisationIdSchema,
  }),
  organisationController.deleteOneOrganisation,
);

export default organisationRouter;
