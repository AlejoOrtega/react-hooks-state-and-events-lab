import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const status = inCart ? 'in-cart' : '';
  const buttonText = inCart? 'Remove From Cart' : 'Add to Cart'

  const onClickAdd = () => {
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={onClickAdd}>{buttonText}</button>
    </li>
  );
}

export default Item;
