import InvitationDao from '@/module/invitation/invitation.dao.js';
import ApiError from '@/shared/utils/apiError.utils.js';
import ApiResponse from '@/shared/utils/apiResponse.utils.js';
import AsyncHandler from '@/shared/utils/async-handler.utils.js';

const invitationDao = new InvitationDao();

class InvitationController {
  sendInvite = AsyncHandler(async (req, res) => {
    const data = req.body;

    console.log('INVITATION DATA=>', data);
  });

  fetchAllInvitations = AsyncHandler(async (req, res) => {
    const { organisationId } = req.params;

    if (typeof organisationId !== 'string') {
      throw ApiError.badRequest('Invalid organisation ID');
    }

    const allInvitations = await invitationDao.fetchAllByOrganisation(organisationId);

    return ApiResponse.ok('Fetched all invitations', allInvitations).send(res);
  });
}
export default InvitationController;
