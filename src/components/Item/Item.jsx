import { Link } from "react-router-dom"
import './item.css'

Link

const Item = ({id, name, img, category, price, stock, description, }) => {
  return (
    <article className="art">

      <h2>{name}</h2>
      <img src={img} className="imgArt" />
      <p>Categoria: {category}</p>
      <h3>Precio: ${price}.00 </h3>
      <h5>Inventario: {stock}</h5>
      <p>Descripcion: {description}</p>
      <Link to={`/detail/${id}`}>Mas detalles</Link>

    </article>
  )
}

export default Item
