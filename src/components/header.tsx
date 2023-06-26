import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getBalance } from "../services/getBalance";
import { getSurroundValues } from "../helpers/getSurroundValues";
import { InterfaceBalance } from "../interfaces/balance.interface";
import BalanceContext from "../context/balance.context";

const Header = () => {
  const { dispatch } = useContext(BalanceContext)

  const [ currentDate, setCurrentDate ] = useState<number>(new Date().getMonth())
  const [ surroundValues, setSurroundValues ] = useState<InterfaceBalance[]>([])

  useEffect(() => {
    dispatch({ type: 'LOADING-INIT' })
    getBalance()
      .then(res => {
        const surround = getSurroundValues(res, currentDate)
        dispatch({ type: 'GET-BALANCE-PER-MONTH', payload: surround[ 2 ] })
        setSurroundValues(surround)
      }).finally(() => {
        dispatch({ type: 'STOP-LOADING' })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ currentDate ])

  return (
    <Container
      fluid='sm'
      className="shadow"
      style={{ backgroundColor: 'var(--primary)', borderRadius: '0 0 1.5rem 1.5rem' }}
    >
      <Row className="text-center d-flex overflow-hidden py-4 flex-nowrap align-items-center justify-content-center" >
        {surroundValues?.map((value, index) => (
          <Col className={`${index === 2 ? 'col-4' : 'col-2'}`} style={{ minWidth: 'max-content' }}>
            {value ?
              (
                <p
                  key={value.mes}
                  className=
                  {`m-0 text-white ${index === 2 ?
                    'font-bold font-20' 
                    : 'font-14 font-light'}`}
                  style={{ minWidth: '100%', cursor: 'pointer' }}
                  onClick={() => setCurrentDate(value.id)}
                >
                  {value.mes}
                </p>
              )
              : (<p key={value}></p>)}
          </Col>
        ))}
      </Row>
    </Container>
  )
};
export default Header;