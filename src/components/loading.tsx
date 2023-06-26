import { CSSProperties } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const style: CSSProperties = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255,255,255,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 99
}

const Loading = () => {
  return(
    <div style={style}>
      <Spinner animation='grow' variant='primary' style={{height: '5rem', width: '5rem'}} />
    </div>
  )
};
export default Loading;
