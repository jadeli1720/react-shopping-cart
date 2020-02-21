import React, { useContext } from 'react';

//context
import { CartContext } from '../contexts/CartContext';


const Item = props => {
	const {cart, removeItem} = useContext(CartContext);
	// console.log('Before',cart);
	console.log(removeItem);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
