import { ReactNode, createContext, useReducer } from "react"
import { InterfaceContext } from "../interfaces/balance.interface"
import { balanceReducer as reduce } from "./balance.reducer";
import { InterfaceAction } from "../interfaces/general.interface";

const initialState: InterfaceContext = {
  id: 0,
  mes: '',
  balance_mes: 0,
  ingresos: 0,
  egresos: 0,
  movimientos: [],
  loading: false
}

const BalanceContext =
  createContext<{ state: InterfaceContext, dispatch: React.Dispatch<InterfaceAction> }>({
    state: initialState,
    dispatch: () => initialState
  });

const BalanceContextProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] =
    useReducer<(state: InterfaceContext, action: InterfaceAction) => InterfaceContext>(reduce, initialState)

  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      {children}
    </BalanceContext.Provider>
  )
}

export default BalanceContext
export { BalanceContextProvider }