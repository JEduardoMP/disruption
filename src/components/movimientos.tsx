import { FC } from "react";
import { InterfaceMovimientos } from "../interfaces/balance.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { formatMoney } from "../helpers/formatMoney";

const Movimientos: FC<InterfaceMovimientos> = ({ gasto, movimiento, cantidad }) => (
  <Container 
    fluid='sm'
    className="d-flex justify-content-between bg-white rounded-3 p-4"
  >
    <Row xs={12}>
      <Col>
        <div
          className={`${gasto ? 'bg-danger rounded-circle' : 'bg-success rounded-3'}`}
          style={{width: '2rem', height: '2rem'}}
        />
      </Col>
      <Col>
        <p
          className="m-0 font-bold font-12"
          style={{whiteSpace: 'nowrap'}}
        >
          {movimiento}
        </p>
      </Col>
    </Row>
    <Row
      xs={12}
      className="d-flex align-items-center"
    >
      <Col>
      <p 
        className={`${gasto ? 'text-danger' : 'text-success'} font-bold font-12 p-0 m-0`}
        style={{whiteSpace: 'nowrap'}}
      >
        {gasto ? '-' : '+'} {formatMoney(cantidad)}
      </p>
      </Col>

      <Col>
      <FontAwesomeIcon icon={faCaretDown} />
      </Col>
    </Row>
  </Container>
);
export default Movimientos;