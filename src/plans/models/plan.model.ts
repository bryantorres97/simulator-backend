import { Schema } from 'mongoose';

export const PlanSchema = new Schema({
  name: { type: String, required: [true, 'El nombre del plan es requerido'] },
  questionsPerDay: { type: Number, default: -1 },
  pdfsAvailable: { type: Number },
  videosAvailable: { type: Number, default: 0 },
  premiumClasses: { type: Number, default: 0 },
  hasWhatsAppGroupAccess: { type: Boolean, default: false },
  hasSupport: { type: Boolean, default: false },
  hasFeedback: { type: Boolean, default: false },
  canPauseSimulator: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});
