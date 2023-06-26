import { InterfaceBalance } from "./balance.interface";

export interface InterfaceAction {
  type: string;
  payload?: InterfaceBalance;
}