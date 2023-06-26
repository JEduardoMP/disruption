import { InterfaceContext } from "../interfaces/balance.interface"
import { InterfaceAction } from "../interfaces/general.interface"

export const balanceReducer = (state: InterfaceContext, action: InterfaceAction): InterfaceContext => {
  switch(action.type) {
    case 'GET-BALANCE-PER-MONTH':
      return {
        ...state,
        ...action.payload
      }
    case 'LOADING-INIT':
      return {
        ...state,
        loading: true
      }
    case 'STOP-LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}