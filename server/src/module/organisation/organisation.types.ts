import type mongoose from 'mongoose';

export type OrganisationRole = 'admin' | 'manager' | 'employee';

export interface IOrganisationMember {
  user: mongoose.Types.ObjectId;
  role: OrganisationRole;
  joinedAt: Date;
}

export interface IOrganisation {
  name: string;
  slug: string;
  description: string;
  logo?: string | null;
  createdBy: mongoose.Types.ObjectId;
  isDeleted: boolean;
  members: IOrganisationMember[];
}
