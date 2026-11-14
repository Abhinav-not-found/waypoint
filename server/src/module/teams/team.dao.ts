import Team from '@/module/teams/team.model.js';
import type { ITeam } from '@/module/teams/team.types.js';
import ApiError from '@/shared/utils/apiError.utils.js';

class TeamDao {
  createNewResource = (data: ITeam) => {
    return Team.create(data);
  };

  fetchAllResources = () => {
    return Team.find({ isDeleted: false });
  };

  fetchUserResources = (id: string) => {
    return Team.find({ createdBy: id, isDeleted: false });
  };

  updateOneResource = async (id: string, data: Partial<ITeam>) => {
    const resource = await Team.findOneAndUpdate({ _id: id, isDeleted: false }, data, {
      new: true,
      runValidators: true,
    });

    if (!resource) throw ApiError.notFound('Team not found');

    return resource;
  };

  softDeleteOneResource = async (id: string) => {
    const resource = await Team.findByIdAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!resource) throw ApiError.notFound('Team not found');

    return resource;
  };

  fetchOneResources = (id: string) => {
    return Team.findOne({ _id: id, isDeleted: false })
      .select('-isDeleted -createdAt -updatedAt')
      .populate({
        path: 'organisationId',
        select: 'name description logo slug',
      })
      .populate({
        path: 'createdBy',
        select: 'name email avatar',
      });
  };
}
export default TeamDao;
