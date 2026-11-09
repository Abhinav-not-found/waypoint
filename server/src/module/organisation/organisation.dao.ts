import Organisation from '@/module/organisation/organisation.model.js';
import type { IOrganisation } from '@/module/organisation/organisation.types.js';
import ApiError from '@/shared/utils/apiError.utils.js';

class OrganisationDao {
  createNewResource = (data: IOrganisation) => {
    return Organisation.create(data);
  };

  fetchAllResources = () => {
    return Organisation.find({ isDeleted: false });
  };

  fetchUserResources = (id: string) => {
    return Organisation.find({ createdBy: id, isDeleted: false });
  };

  updateOneResource = async (id: string, data: Partial<IOrganisation>) => {
    const resource = await Organisation.findOneAndUpdate({ _id: id, isDeleted: false }, data, {
      new: true,
      runValidators: true,
    });

    if (!resource) throw ApiError.notFound('Organisation not found');

    return resource;
  };

  softDeleteOneResource = async (id: string) => {
    const resource = await Organisation.findByIdAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!resource) throw ApiError.notFound('Organisation not found');

    return resource;
  };

  fetchOneResources = (id: string) => {
    return Organisation.findOne({ _id: id, isDeleted: false });
  };
}
export default OrganisationDao;
