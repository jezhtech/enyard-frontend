export type ContactMethod = "email" | "sms";

export interface BusinessApplication {
  id: string;
  companyName: string;
  industry: string;
  companySize: string;
  currentChallenges: string;
  goalsObjectives: string;
  timeline: string;
  budgetRange: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: ContactMethod;
  createdAt: string;
  updatedAt: string;
}

export type NewBusinessApplication = Omit<BusinessApplication, "id" | "createdAt" | "updatedAt">;

export interface BusinessApplicationResponse {
    success: boolean;
    data: BusinessApplication;
    message: string;
}

export interface BusinessApplicationsResponse {
    success: boolean;
    data: BusinessApplication[];
}
