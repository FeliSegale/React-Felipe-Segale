
import Popover from 'react-bootstrap/Popover';
import React from 'react'

const ItemDetail = (item) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        {item.detalles}
      </Popover.Body>
    </Popover>
  );
  
  // const Example = () => (
  //   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  //     <Button variant="success">Click me to see</Button>
  //   </OverlayTrigger>
  // );
  return (
    <div>
    </div>
  )
}

export default ItemDetail