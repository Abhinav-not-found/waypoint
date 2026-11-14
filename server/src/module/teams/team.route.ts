import TeamController from '@/module/teams/team.controller.js';
import TeamValidator from '@/module/teams/team.validator.js';
import { requireAuth } from '@/shared/middlewares/auth.middleware.js';
import validate from '@/shared/middlewares/validate.middleware.js';
import { Router } from 'express';

const teamRouter = Router();
const teamController = new TeamController();
const teamValidator = new TeamValidator();

teamRouter.post(
  '/',
  requireAuth,
  validate({
    body: teamValidator.createTeamSchema,
  }),
  teamController.createTeam,
);

teamRouter.get('/all', requireAuth, teamController.getAllTeams);

teamRouter.get('/my', requireAuth, teamController.getUserTeams);

teamRouter.get('/:teamId', requireAuth, teamController.getOneTeam);

teamRouter.patch(
  '/:teamId',
  requireAuth,
  validate({
    params: teamValidator.teamIdSchema,
    body: teamValidator.updateTeamSchema,
  }),
  teamController.updateOneTeam,
);

teamRouter.delete(
  '/:teamId',
  requireAuth,
  validate({
    params: teamValidator.teamIdSchema,
  }),
  teamController.deleteOneTeam,
);

export default teamRouter;
