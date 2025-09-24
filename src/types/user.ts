export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type UserCreate = Omit<User, "id" | "createdAt" | "updatedAt" | "role"> & { password: string };

export type UserUpdate = Partial<Omit<User, "id" | "createdAt" | "updatedAt" | "role">>;

export interface UserSearchParams {
    page?: number;
    limit?: number;
    search?: string;
    role?: UserRole;
    is_active?: boolean;
    is_verified?: boolean;
    department?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
}

export interface ProfileImageResponse {
    id: string;
    url: string;
    is_primary: boolean;
    created_at: string;
}
