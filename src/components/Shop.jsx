import PropTypes from "prop-types";
import { PRODUCTS_MOCK } from "../products-mock";
import { Product } from "./Product";

export const Shop = ({ onAddItemToCart }) => {
    return (
        <section id="shop">
            <h2>Najlepsze gry w najlepszych cenach</h2>

            <ul id="products">
                {PRODUCTS_MOCK.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        onAddToCart={onAddItemToCart}
                    />
                ))}
            </ul>
        </section>
    );
};

Shop.propTypes = {
    onAddItemToCart: PropTypes.func,
};