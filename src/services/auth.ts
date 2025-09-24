import { ApiClient } from "@/lib/apiClient";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "@/types";

export class AuthService extends ApiClient {
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    return this.post<RegisterResponse>("/auth/register", data);
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await this.post<LoginResponse>("/auth/login", data);
    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
    }
    return response;
  }

  async logout() {
    localStorage.removeItem("auth_token");
  }

  async forgotPassword(
    data: ForgotPasswordRequest,
  ): Promise<ForgotPasswordResponse> {
    return this.post<ForgotPasswordResponse>("/auth/forgot-password", data);
  }

  async resetPassword(
    data: ResetPasswordRequest,
  ): Promise<ResetPasswordResponse> {
    return this.post<ResetPasswordResponse>("/auth/reset-password", data);
  }
}

export const authService = new AuthService();
