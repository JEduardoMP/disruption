export interface InterfaceMovimientos {
  gasto: boolean;
  movimiento: string;
  cantidad: number
}

export interface InterfaceBalance {
  id: number;
  mes: string;
  balance_mes: number;
  ingresos: number;
  egresos: number;
  movimientos: {
    [fecha: string]: InterfaceMovimientos[]
  };
}

export type InterfaceContext = InterfaceBalance & {
  loading: boolean;
}