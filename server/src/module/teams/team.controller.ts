import { getCurrentUser } from '@/module/auth/auth.util.js';
import OrganisationDao from '@/module/organisation/organisation.dao.js';
import TeamDao from '@/module/teams/team.dao.js';
import ApiError from '@/shared/utils/apiError.utils.js';
import ApiResponse from '@/shared/utils/apiResponse.utils.js';
import AsyncHandler from '@/shared/utils/async-handler.utils.js';
import mongoose from 'mongoose';

const teamDao = new TeamDao();
const organisationDao = new OrganisationDao();

class TeamController {
  createTeam = AsyncHandler(async (req, res) => {
    const { organisationId, ...data } = req.body;

    const userId = getCurrentUser(req);

    if (!mongoose.Types.ObjectId.isValid(organisationId)) {
      throw ApiError.badRequest('Invalid organisation ID');
    }

    // Check organisation exists
    const organisation = await organisationDao.fetchOneResources(organisationId);
    if (!organisation || organisation.isDeleted) {
      throw ApiError.notFound('Organisation not found');
    }

    // Check user belongs to organisation
    // const membership = organisation.members.find(
    //   (member) => String(member.user) === String(userId),
    // );
    // if (!membership) {
    //   throw ApiError.forbidden('You are not a member of this organisation');
    // }

    // create team
    const newTeam = await teamDao.createNewResource({
      ...data,
      organisationId,
      createdBy: userId,
    });

    return ApiResponse.created('New team created', newTeam).send(res);
  });

  getAllTeams = AsyncHandler(async (req, res) => {
    const allTeams = await teamDao.fetchAllResources();

    return ApiResponse.ok('Fetched all teams', allTeams).send(res);
  });

  getUserTeams = AsyncHandler(async (req, res) => {
    const userId = getCurrentUser(req);
    const allTeams = await teamDao.fetchUserResources(userId);

    return ApiResponse.ok('Fetched user teams', allTeams).send(res);
  });

  getOneTeam = AsyncHandler(async (req, res) => {
    const { teamId } = req.params;

    if (typeof teamId !== 'string') {
      throw ApiError.badRequest('Invalid team ID');
    }

    const oneTeam = await teamDao.fetchOneResources(teamId);

    return ApiResponse.ok('Fetched one team', oneTeam).send(res);
  });

  updateOneTeam = AsyncHandler(async (req, res) => {
    const data = req.body;
    const { teamId } = req.params;

    if (typeof teamId !== 'string') {
      throw ApiError.badRequest('Invalid team ID');
    }

    const updatedTeam = await teamDao.updateOneResource(teamId, data);

    return ApiResponse.ok('Updated one team', updatedTeam).send(res);
  });

  deleteOneTeam = AsyncHandler(async (req, res) => {
    const { teamId } = req.params;

    if (typeof teamId !== 'string') {
      throw ApiError.badRequest('Invalid team ID');
    }

    const deletedTeam = await teamDao.softDeleteOneResource(teamId);

    return ApiResponse.ok('Deleted one team', deletedTeam).send(res);
  });
}
export default TeamController;
