export const SUPERADMIN = "SUPERADMIN";

export const WRONG_USER_PASSWORD = "WGO_AUTH_WRONG_USER_PASSWORD";
export const WRONG_CONFIRM_EMAIL = "WGO_AUTH_WRONG_CONFIRM_EMAIL";
export const WRONG_TOKEN = "WGO_AUTH_WRONG_TOKEN";
export const WRONG_EMAIL = "WGO_AUTH_WRONG_EMAIL";
export const WRONG_REGISTER = "WGO_AUTH_WRONG_REGISTER";
export const WRONG_USER_DONT_EXIST = "WGO_AUTH_WRONG_USER_DONT_EXIST";
export const WRONG_USER_NAME = "WGO_AUTH_WRONG_USER_NAME_EXIST";
export const WRONG_CODE_ALREADY_EXIST = "WGO_AUTH_WRONG_CODE_ALREADY_EXIST";

export const authServerTranslations = [
  WRONG_USER_PASSWORD,
  WRONG_CONFIRM_EMAIL,
  WRONG_TOKEN,
  WRONG_EMAIL,
  WRONG_REGISTER,
  WRONG_USER_DONT_EXIST,
  WRONG_USER_NAME,
];

export const USER_AUTH_TOKEN = "AUTH_TOKEN";
export const TOKEN_EXP = "4h";
export const TOKEN_REGISTER_EXP = "24h";

export enum AuthTemplateEnum {
  ResetPassword = "ResetPassword",
  ConfirmEmail = "ConfirmEmail",
  ConfirmChangeDefaultPassword = "ConfirmChangeDefaultPassword",
}

export const getAuthTemplateKey = (type: string) => {
  return `TEMPLATE_DATA_AUTH_${type}`.toUpperCase();
};
