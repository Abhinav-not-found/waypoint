import type { IOrganisation } from '@/module/organisation/organisation.types.js';
import mongoose from 'mongoose';

const OrganisationSchema = new mongoose.Schema<IOrganisation>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    slug: {
      // Automatic
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: '',
    },

    logo: {
      type: String,
      default: null,
    },

    createdBy: {
      // Automatic
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        role: {
          type: String,
          enum: ['admin', 'manager', 'employee'],
          default: 'employee',
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

OrganisationSchema.pre('validate', async function () {
  if (!this.isModified('name')) return;

  const baseSlug = this.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  let slug = baseSlug;
  let count = 1;

  while (
    await mongoose.connection.collection('organisations').findOne({
      slug,
      _id: { $ne: this._id },
    })
  ) {
    slug = `${baseSlug}-${count++}`;
  }

  this.slug = slug;
});
const Organisation = mongoose.model('Organisation', OrganisationSchema);
export default Organisation;
