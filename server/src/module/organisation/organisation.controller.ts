import { getCurrentUser } from '@/module/auth/auth.util.js';
import OrganisationDao from '@/module/organisation/organisation.dao.js';
import ApiError from '@/shared/utils/apiError.utils.js';
import ApiResponse from '@/shared/utils/apiResponse.utils.js';
import AsyncHandler from '@/shared/utils/async-handler.utils.js';

const organisationDao = new OrganisationDao();

class OrganisationController {
  createOrganisation = AsyncHandler(async (req, res) => {
    const data = req.body;
    const userId = getCurrentUser(req);

    const newOrganisation = await organisationDao.createNewResource({ ...data, createdBy: userId });

    return ApiResponse.created('New organisation created', newOrganisation).send(res);
  });

  getAllOrganisations = AsyncHandler(async (req, res) => {
    const allOrganisations = await organisationDao.fetchAllResources();

    return ApiResponse.ok('Fetched all organisations', allOrganisations).send(res);
  });

  getUserOrganisations = AsyncHandler(async (req, res) => {
    const userId = getCurrentUser(req);
    const allOrganisations = await organisationDao.fetchUserResources(userId);

    return ApiResponse.ok('Fetched user organisations', allOrganisations).send(res);
  });

  updateOneOrganisation = AsyncHandler(async (req, res) => {
    const data = req.body;
    const { organisationId } = req.params;

    if (typeof organisationId !== 'string') {
      throw ApiError.badRequest('Invalid organisation ID');
    }

    const updatedOrganisation = await organisationDao.updateOneResource(organisationId, data);

    return ApiResponse.ok('Updated one organisation', updatedOrganisation).send(res);
  });

  deleteOneOrganisation = AsyncHandler(async (req, res) => {
    const { organisationId } = req.params;

    if (typeof organisationId !== 'string') {
      throw ApiError.badRequest('Invalid organisation ID');
    }

    const deletedOrganisation = await organisationDao.softDeleteOneResource(organisationId);

    return ApiResponse.ok('Deleted one organisation', deletedOrganisation).send(res);
  });

  getOneOrganisations = AsyncHandler(async (req, res) => {
    const { organisationId } = req.params;

    if (typeof organisationId !== 'string') {
      throw ApiError.badRequest('Invalid organisation ID');
    }

    const oneOrganisations = await organisationDao.fetchOneResources(organisationId);

    return ApiResponse.ok('Fetched one organisation', oneOrganisations).send(res);
  });
}

export default OrganisationController;
