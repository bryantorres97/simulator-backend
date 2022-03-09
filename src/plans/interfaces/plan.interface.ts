export class Plan {
  _id?: string;
  name: string;
  pdfsAvailable: number;
  allowVideos: boolean;
  hasPremiumClasses: boolean;
  hasWhatsAppGroupAccess: boolean;
  hasSupport: boolean;
  hasFeedback: boolean;
  canPauseSimulator: boolean;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
