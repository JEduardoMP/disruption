import { FC } from "react";
import { Button } from "react-bootstrap";
import { InterfaceStickyButton } from "../interfaces/stickyButton.interface";

const StickyButton: FC<InterfaceStickyButton> = ({content}) => {
  return(
    <Button 
      className="position-fixed mx-auto border-0"
      style={{
        right: '50%', 
        transform: 'translateX(50%)',
        bottom: '3rem',
        backgroundColor: 'var(--primary)',
        fontSize: '1.6rem',
        whiteSpace: 'nowrap',
        padding: '0.8rem 3rem'
      }}
    >
      {content}
    </Button>
  )
};
export default StickyButton;
