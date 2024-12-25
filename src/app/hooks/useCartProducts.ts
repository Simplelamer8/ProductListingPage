import { useEffect, useState } from "react";
import axios from "axios";
import { Product, Cart } from "../types/types";

export const useCartProducts = (cart: Cart) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async (id: string): Promise<Product> => {
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

      const fetchedProducts:Product[] = await Promise.all(
        Object.keys(cart).map((id) => fetchProduct(id))
      );
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [cart]);

  return products;
};