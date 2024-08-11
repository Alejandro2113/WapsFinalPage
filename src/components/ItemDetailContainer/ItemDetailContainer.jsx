import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/index.js";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "producto", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const productData = { id: productSnap.id, ...productSnap.data() };
          setProduct(productData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;