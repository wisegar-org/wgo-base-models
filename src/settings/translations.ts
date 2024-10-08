import { settingsServerTranslations } from "./constants";

export const settingsTranslations = {
  TITLE: "WGO_SETTINGS_TITLE",
  TITLE_DIALOG: "WGO_SETTINGS_TITLE_DIALOG",
  COLUMN_TYPE_SETTINGS: "WGO_SETTINGS_COLUMN_TYPE_SETTINGS",
  COLUMN_KEY: "WGO_SETTINGS_COLUMN_KEY",
  COLUMN_SETTING: "WGO_SETTINGS_COLUMN_SETTING",
  COLUMN_VALUE: "WGO_SETTINGS_COLUMN_VALUE",
  SET_SUCCESS: "WGO_SETTINGS_SET_SUCCESS_MSG",
  TRUE: "WGO_SETTINGS_BOOLEAN_SETTING_TRUE",
  FALSE: "WGO_SETTINGS_BOOLEAN_SETTING_FALSE",
};

export const getSettingsTranslationsKeys = () => {
  return Object.values(settingsTranslations).concat(settingsServerTranslations);
};
