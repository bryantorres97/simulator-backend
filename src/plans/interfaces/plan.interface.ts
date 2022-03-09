export class Plan {
  _id?: string;
  name: string;
  questionsPerDay: number;
  pdfsAvailable: number;
  videosAvailable: number;
  premiumClasses: number;
  hasWhatsAppGroupAccess: boolean;
  hasSupport: boolean;
  hasFeedback: boolean;
  canPauseSimulator: boolean;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
