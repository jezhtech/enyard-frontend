import { ApiClient } from "@/lib/apiClient";

import type {
  BusinessApplicationResponse,
  BusinessApplicationsResponse,
  NewBusinessApplication,
} from "@/types";

export class BusinessApplicationService extends ApiClient {
  async createBusinessApplication(
    data: NewBusinessApplication,
  ): Promise<BusinessApplicationResponse> {
    return this.post<BusinessApplicationResponse>(
      "/business-application",
      data,
    );
  }

  async getAllBusinessApplications(): Promise<BusinessApplicationsResponse> {
    return this.get<BusinessApplicationsResponse>("/business-application");
  }

  async getBusinessApplicationById(
    id: string,
  ): Promise<BusinessApplicationResponse> {
    return this.get<BusinessApplicationResponse>(`/business-application/${id}`);
  }

  async deleteBusinessApplication(id: string): Promise<void> {
    return this.delete<void>(`/business-application/${id}`);
  }
}

export const businessApplicationService = new BusinessApplicationService();
