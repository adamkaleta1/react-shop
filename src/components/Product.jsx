import PropTypes from 'prop-types'
import '../index.css'

export const Product = ({
    image,
    title,
    price,
    description,
    id,
    onAddToCart,
}) => {

    return (
        <article className="product">
            <img src={image} alt={title} className="product-image" />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">{price} zł</p>
                    <p className="product-des">{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={() => onAddToCart(id)}>Dodaj do koszyka</button>
                </p>
            </div>
        </article>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.string,
    onAddToCart: PropTypes.func,
}