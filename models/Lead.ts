import mongoose, { Schema, Document, Model } from 'mongoose';

interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  weightGoal: string;
}

const leadSchema = new Schema<ILead>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weightGoal: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;

