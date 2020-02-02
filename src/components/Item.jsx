import React from 'react';

function Item(props) {
  const qty = props.qty;
  const item = props.item;

  return (
    <li className='Item'>
      {qty} {item}
    </li>
  );
}

export default Item;
