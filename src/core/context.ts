import { IUser } from "./user";
import { EventEmitter } from "events";
import { IHandlerSettings } from "../settings";

export interface IUserContext extends IUser {
  isSuperAdmin?: boolean;
}
export interface IContextBase {
  user?: IUserContext;
  dataSource: any;
  web_root: string;
  language: number;
  emiter: EventEmitter;
  listenersEvents: IHandlerSettings[];
  cypherKey: string;
}
