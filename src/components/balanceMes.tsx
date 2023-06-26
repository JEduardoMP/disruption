import { FC } from "react";
import { formatMoney } from "../helpers/formatMoney";
import { InterfaceBalanceMes } from "../interfaces/balanceMes.interface";

const BalanceMes: FC<InterfaceBalanceMes> = ({balance, ingresos, egresos}) => {
  return (
    <div
      className="bg-white col-10 mx-auto text-center py-4 mt-4 border rounded-3"
      style={{ height: 'max-content' }}
    >
      <p className="font-bold font-14">Balance del mes</p>
      <h2 
        className="font-bold font-32"
        style={{ color: 'var(--primary)' }}
      >
        {formatMoney(balance)}
      </h2>
      <div className="d-flex gap-4 text-center justify-content-center mt-4">
        <div className="border-end pr-4 text-success">
          <p className="font-12 font-light">Ingresos</p>
          <h3 className="font-20 font-bold">{formatMoney(ingresos)}</h3>
        </div>
        <div className="text-danger">
          <p className="font-12 font-light">Gastos</p>
          <h3 className="font-20 font-bold">{formatMoney(egresos)}</h3>
        </div>
      </div>
    </div>
  )
};
export default BalanceMes;