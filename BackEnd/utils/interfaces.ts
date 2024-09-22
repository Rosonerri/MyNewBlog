import { HTTP } from "./enums";

export interface iError {
  name: string;
  message: string;
  success: boolean;
  status: HTTP;
}
