

export interface IUser {
  id: string;
  fullname: string;
  email: string;
  is_verified: boolean;
  is_admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IUserRegisterPayload = {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
};
export type IUserLoginPayload = {
  email: string;
  password: string;
};
