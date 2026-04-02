import mongoose, { Schema, Document, Model } from 'mongoose';

interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  details: string;
  fileUrl?: string;
}

const contactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  details: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;

