import { InterfaceBalance } from "../interfaces/balance.interface";

export const getSurroundValues = (arr: InterfaceBalance[], currentIndex: number) => {
  return [
    arr[currentIndex - 2],
    arr[currentIndex - 1],
    arr[currentIndex],
    arr[currentIndex + 1],
    arr[currentIndex + 2]
  ];
}