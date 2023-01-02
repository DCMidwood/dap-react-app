import Modal from "../../src/components/UI/Modal";
import classes from "./Order.module.css"

const Order = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: "c1", name: "sushi", amount: 2, price: 12.99},
    ].map(item => <li key={item.id}>{item.name}</li>)}</ul>

    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>345.6</span>
        </div>
        <div className={classes.actions}>
            <button className = {classes['button--alt']}>Close</button>
            <button className = {classes.button}>Order</button>
        </div>
    </Modal>)
};

export default Order