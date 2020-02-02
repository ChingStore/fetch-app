import React from 'react';

function Item(props) {
  const qty = props.qty;
  const item = props.item;
  const price = props.price;

  return (
    <li className='Item'>
      {qty} {item} @ {price}
    </li>
  );
}

export default Item;
