import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Cart } from "./Cart";
import PropTypes from "prop-types";

export const CartModal = forwardRef(function Modal(
    { actions, cartItems, title, onUpdateCartItemQuantity },
    ref
) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

CartModal.propTypes = {
    actions: PropTypes.node,
    cartItems: PropTypes.array,
    title: PropTypes.string,
    onUpdateCartItemQuantity: PropTypes.func,
}