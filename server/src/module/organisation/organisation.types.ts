import type mongoose from 'mongoose';

export interface IOrganisation {
  name: string;
  slug: string;
  description: string;
  logo?: string | null;
  createdBy: mongoose.Types.ObjectId;
  isDeleted: boolean;
}
