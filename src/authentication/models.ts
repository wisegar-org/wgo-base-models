import { IUser } from "../core";
import { IContextBase } from "../core/context";
import { IEmailOptions } from "../email";

export interface IAuthModelArg {
  ctx: IContextBase;
  privateKey: string;
  publicKey: string;
  // TOKEN_EXPIRES_IN
  hostBase: string;
  tokenExpiresIn?: string;
  tokenRegisterExpiresIn?: string;
  emailOptions: IEmailOptions;
  transportEmailOptions: any;
}

export interface IAuthLoginParams {
  user: string;
  password: string;
}

export interface IAuthMeParams {
  token: string;
}

export interface IAuthResendParam {
  email: string;
}

export interface IAuthEditParams extends IUser {
  password: string;
}

export interface IAuthRegisterParams extends IAuthEditParams {
  isEmailConfirmed: boolean;
}

export interface ISuccesLogin {
  token: string;
  user: IUser;
}

export interface IChangePasswordParam {
  token: string;
  password: string;
}

export interface ICheckUserUniqueUserName {
  id: number;
  userName: string;
}
