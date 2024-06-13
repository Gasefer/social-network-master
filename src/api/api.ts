import axios from "axios";

import { UserType } from "@/types/types";

export const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "8824ceb4-d76e-4c2d-84eb-bcba650d97c7" },
});

export enum ResultCodesEnum {
  Succses = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export type APIResponseType<D = object, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};
