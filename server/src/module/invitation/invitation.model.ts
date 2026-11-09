import mongoose, { Schema } from 'mongoose';
import { expectFailure } from 'node:test';

const InvitationSchema = new Schema(
  {
    organisation: {
      type: Schema.Types.ObjectId,
      ref: 'Organisation',
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ['manager', 'employee'],
      default: 'employee',
    },

    invitedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    status: {
      type: String,
      enum: ['pending', 'accepted'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

InvitationSchema.index(
  { organisation: 1, email: 1 },
  {
    unique: true,
    partialFilterExpression: { status: 'pending' },
  },
);

const InvitationModel = mongoose.model('Invitation', InvitationSchema);

export default InvitationModel
