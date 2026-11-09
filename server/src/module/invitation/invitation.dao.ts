import InvitationModel from '@/module/invitation/invitation.model.js';

class InvitationDao {
  fetchAllByOrganisation = (organisationId: string) => {
    return InvitationModel.find({
      organisation: organisationId,
    });
  };
}

export default InvitationDao;
