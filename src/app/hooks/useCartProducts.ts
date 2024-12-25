import { useEffect, useState } from "react";
import axios from "axios";
import { Cart, TempProduct } from "../types/types";

export const useCartProducts = (cart: Cart) => {
  const [products, setProducts] = useState<TempProduct[]>([]);

  useEffect(() => {
    const fetchProduct = async (id: string): Promise<TempProduct> => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return {
        title: response.data.title,
        price: response.data.price,
        id,
      };
    };

    const fetchProducts = async () => {
      if (!cart || Object.keys(cart).length === 0) {
        setProducts([]);
        return;
      }

      const fetchedProducts:TempProduct[] = await Promise.all(
        Object.keys(cart).map((id) => fetchProduct(id))
      );
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [cart]);

  return products;
};
