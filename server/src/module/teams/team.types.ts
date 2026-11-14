import type mongoose from 'mongoose';

export interface ITeam {
  name: string;
  description: string;
  organisationId: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  isDeleted: boolean;
}
