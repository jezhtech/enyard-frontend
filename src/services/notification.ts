import { ApiClient } from "@/lib/apiClient";

import type {
  NotificationResponse,
  NotificationsResponse,
  NewNotification,
} from "@/types";

export class NotificationService extends ApiClient {
  async createNotification(
    data: NewNotification,
  ): Promise<NotificationResponse> {
    return this.post<NotificationResponse>(
      "/notification",
      data,
    );
  }

  async getAllNotifications(): Promise<NotificationsResponse> {
    return this.get<NotificationsResponse>("/notification");
  }

  async getNotificationById(
    id: string,
  ): Promise<NotificationResponse> {
    return this.get<NotificationResponse>(`/notification/${id}`);
  }

  async deleteNotification(id: string): Promise<void> {
    return this.delete<void>(`/notification/${id}`);
  }
}

export const notificationService = new NotificationService();
