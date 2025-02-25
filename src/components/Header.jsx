import { useRef } from "react";
import { CartModal } from "./CartModal";
import PropTypes from "prop-types";

export const Header = ({ cart, onUpdateCartItemQuantity }) => {
    const modal = useRef();
    const cartQuantity = cart?.items?.length;

    function handleOpenCartClick() {
        modal.current.open();
    }

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal
                ref={modal}
                cartItems={cart?.items}
                title="Twój koszyk"
                actions={modalActions}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
            />
            <header id="main-header">
                <div id="main-title">
                    <h1>GameKing</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart {cartQuantity}</button>
                </p>
            </header>
        </>
    );
};

Header.propTypes = {
    cart: {
        items: PropTypes.array,
    },
    onUpdateCartItemQuantity: PropTypes.func,
};