import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Well1 from "../Well1/Well1";
import { db } from "../../services/firebase/index.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        let q;
        if (category) {
          q = query(collection(db, "producto"), where("category", "==", category));
        } else {
          q = collection(db, "producto");
        }

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Well1 />
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;