import { Link } from "react-router-dom";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../hooks/useCart";

const ItemDetail = ({ id, name, img, category, price, stock, description, details }) => {
    const { addItem, ItemAdded } = useCart();
    const handleAdd = (count) => {
        const produObj = {
            id, name, price, quantity: count
        }
        addItem(produObj)
    }

    return (
        <div className="item-detail-container">
            <h2>{name}</h2>
            <div className="item-detail-content">
                <div className="item-image-container">
                    <img src={img} alt={name} className="item-image" />
                </div>
                <div className="item-info">
                    <p><strong>Categoría:</strong> {category}</p>
                    <h3>Precio: ${price}.00</h3>
                    <p><strong>Inventario:</strong> {stock}</p>
                    <div className="item-description">
                        <h4>Descripción:</h4>
                        <p>{description}</p>
                    </div>
                    <div className="item-details">
                        <h4>Detalles del producto:</h4>
                        <p>{details}</p>
                    </div>
                    {ItemAdded(id) ? (
                        <Link to='/cart' className="finish-purchase-btn">Finalizar Compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleAdd} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;