import Header from './components/header';
import { useContext } from 'react';
import BalanceContext from './context/balance.context';
import Loading from './components/loading';
import BalanceMes from './components/balanceMes';
import { InterfaceMovimientos } from './interfaces/balance.interface';
import Movimientos from './components/movimientos';
import { Container } from 'react-bootstrap';
import StickyButton from './components/stickyButton';

function App() {
  const { state } = useContext(BalanceContext)
  return (
    <>
      {state.loading && <Loading />}
      <StickyButton content='Agrega Movimiento' />
      <Container
        fluid='sm'
        className='col-md-6 pb-4'
        style={{ backgroundColor: 'var(--bgPrimary)', minHeight: '100vh' }}
      >

        <Header />
        <BalanceMes 
          balance={state.balance_mes}
          ingresos={state.ingresos}
          egresos={state.egresos}
        />
        <div className='col-10 mx-auto mt-4'>
          {Object.entries(state.movimientos)?.map(([ fecha, arrMovimientos ]) => (
            <>
              <p className='font-12 font-bold mb-2'>

                {fecha.split('-')[2]} {state.mes}
              </p>
              <div
                className='d-flex flex-column gap-2 mb-4'
              >
              {arrMovimientos?.map((movimiento: InterfaceMovimientos) => (
                <Movimientos
                  cantidad={movimiento.cantidad}
                  gasto={movimiento.gasto}
                  movimiento={movimiento.movimiento}
                />
              ))}
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  )
}

export default App
